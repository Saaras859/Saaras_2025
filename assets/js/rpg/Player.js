import GameEnv from './GameEnv.js';

// Define non-mutable constants as defaults
const SCALE_FACTOR = 25; // 1/nth of the height of the canvas
const STEP_FACTOR = 100; // 1/nth, or N steps up and across the canvas
const ANIMATION_RATE = 1; // 1/nth of the frame rate

/**
 * Player is a dynamic class that manages the data and events for a player object.
 * 
 * The focus of this class is to handle the player's state, rendering, and key events.
 * 
 * This class uses a classic Java class pattern which is nice for managing object data and events.
 * 
 * The classic Java class pattern provides a structured way to define the properties and methods
 * associated with the player. This approach helps encapsulate the player's state and behavior,
 * making the code more modular and easier to maintain. By using this pattern, we can create
 * multiple instances of the Player class, each with its own state and behavior.
 * 
 * @class Player
 * @property {Object} position - The current position of the player.
 * @property {Object} velocity - The current velocity of the player.
 * @property {Object} scale - The scale of the player based on the game environment.
 * @property {number} size - The size of the player.
 * @property {number} width - The width of the player.
 * @property {number} height - The height of the player.
 * @property {number} xVelocity - The velocity of the player along the x-axis.
 * @property {number} yVelocity - The velocity of the player along the y-axis.
 * @property {Image} spriteSheet - The sprite sheet image for the player.
 * @property {number} frameIndex - The current frame index for animation.
 * @property {number} frameCount - The total number of frames for each direction.
 * @property {Object} spriteData - The data for the sprite sheet.
 * @property {number} frameCounter - Counter to control the animation rate.
 * @method resize - Resizes the player based on the game environment.
 * @method draw - Draws the player on the canvas.
 * @method update - Updates the player's position and ensures it stays within the canvas boundaries.
 * @method bindEventListeners - Binds key event listeners to handle player movement.
 * @method handleKeyDown - Handles key down events to change the player's velocity.
 * @method handleKeyUp - Handles key up events to stop the player's velocity.
 */
class Player {
    /**
     * The constructor method is called when a new Player object is created.
     * 
     * @param {Object|null} sprite - The sprite data for the player. If null, a default red square is used.
     */
    constructor(sprite = null) {
        // Initialize the player's scale based on the game environment
        this.scale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

        // Check if sprite data is provided
        if (sprite) {
            this.scaleFactor = sprite.data.SCALE_FACTOR || SCALE_FACTOR;
            this.stepFactor = sprite.data.STEP_FACTOR || STEP_FACTOR;
            this.animationRate = sprite.data.ANIMATION_RATE || ANIMATION_RATE;
    
            // Load the sprite sheet
            this.spriteSheet = new Image();
            this.spriteSheet.src = sprite.src;

            // Initialize animation properties
            this.frameIndex = 0; // index reference to current frame
            this.frameCounter = 0; // count each frame rate refresh
            this.direction = 'down'; // Initial direction
            this.spriteData = sprite.data;
        } else {
            // Default to red square
            this.scaleFactor = SCALE_FACTOR;
            this.stepFactor = STEP_FACTOR;
            this.animationRate = ANIMATION_RATE;
            // No sprite sheet for default
            this.spriteSheet = null;
        }

        // Set the initial size of the player
        this.size = GameEnv.innerHeight / this.scaleFactor;

        // Initialize the player's position and velocity
        this.position = { x: 0, y: GameEnv.innerHeight - this.size };
        this.velocity = { x: 0, y: 0 };

        // Set the initial size and velocity of the player
        this.resize();

        // Bind event listeners to allow object movement
        this.bindEventListeners();
    }

    /**
     * Resizes the player based on the game environment.
     * 
     * This method adjusts the player's size and velocity based on the scale of the game environment.
     * It also adjusts the player's position proportionally based on the previous and current scale.
     */
    resize() {
        // Calculate the new scale resulting from the window resize
        const newScale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

        // Adjust the player's position proportionally
        this.position.x = (this.position.x / this.scale.width) * newScale.width;
        this.position.y = (this.position.y / this.scale.height) * newScale.height;

        // Update the player's scale to the new scale
        this.scale = newScale;

        // Recalculate the player's size based on the new scale
        this.size = this.scale.height / this.scaleFactor; 

        // Recalculate the player's velocity steps based on the new scale
        this.xVelocity = this.scale.width / this.stepFactor;
        this.yVelocity = this.scale.height / this.stepFactor;

        // Set the player's width and height to the new size (object is a square)
        this.width = this.size;
        this.height = this.size;
    }

    /**
     * Draws the player on the canvas.
     * 
     * This method renders the player using the sprite sheet if provided, otherwise a red square.
     */
    draw() {
        if (this.spriteSheet) {
            // Sprite Sheet frame size: pixels = total pixels / total frames
            const frameWidth = this.spriteData.pixels.width / this.spriteData.orientation.columns;
            const frameHeight = this.spriteData.pixels.height / this.spriteData.orientation.rows;

            // Sprite Sheet direction data source (e.g., front, left, right, back)
            const directionData = this.spriteData[this.direction];

            // Sprite Sheet x and y declarations to store coordinates of current frame
            let frameX, frameY;
            // Sprite Sheet x and y current frame: coordinate = (index) * (pixels)
            frameX = (directionData.start + this.frameIndex) * frameWidth;
            frameY = directionData.row * frameHeight;

            // Draw the current frame of the sprite sheet
            GameEnv.ctx.drawImage(
                this.spriteSheet,
                frameX, frameY, frameWidth, frameHeight, // Source rectangle
                this.position.x, this.position.y, this.width, this.height // Destination rectangle
            );

            // Update the frame index for animation at a slower rate
            this.frameCounter++;
            if (this.frameCounter % this.animationRate === 0) {
                this.frameIndex = (this.frameIndex + 1) % directionData.columns;
            }
        } else {
            // Draw default red square
            GameEnv.ctx.fillStyle = 'red';
            GameEnv.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }

    /**
     * Updates the player's position and ensures it stays within the canvas boundaries.
     * 
     * This method updates the player's position based on its velocity and ensures that the player
     * stays within the boundaries of the canvas.
     */
    update() {
        // Update begins by drawing the player object
        this.draw();

        // Update or change position according to velocity events
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Ensure the player stays within the canvas boundaries
        // Bottom of the canvas
        if (this.position.y + this.height > GameEnv.innerHeight) {
            this.position.y = GameEnv.innerHeight - this.height;
            this.velocity.y = 0;
        }
        // Top of the canvas
        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = 0;
        }
        // Right of the canvas
        if (this.position.x + this.width > GameEnv.innerWidth) {
            this.position.x = GameEnv.innerWidth - this.width;
            this.velocity.x = 0;
        }
        // Left of the canvas
        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x = 0;
        }
    }

    /**
     * Binds key event listeners to handle player movement.
     * 
     * This method binds keydown and keyup event listeners to handle player movement.
     * The .bind(this) method ensures that 'this' refers to the player object.
     */
    bindEventListeners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    /**
     * Handles key down events to change the player's velocity.
     * 
     * This method updates the player's velocity based on the key pressed.
     * 
     * @param {Object} event - The keydown event object.
     */
    handleKeyDown({ keyCode }) {
        switch (keyCode) {
            case 87: // 'W' key
                this.velocity.y -= this.yVelocity;
                this.direction = 'up';
                break;
            case 65: // 'A' key
                this.velocity.x -= this.xVelocity;
                this.direction = 'left';
                break;
            case 83: // 'S' key
                this.velocity.y += this.yVelocity;
                this.direction = 'down';
                break;
            case 68: // 'D' key
                this.velocity.x += this.xVelocity;
                this.direction = 'right';
                break;
        }
    }

    /**
     * Handles key up events to stop the player's velocity.
     * 
     * This method stops the player's velocity based on the key released.
     * 
     * @param {Object} event - The keyup event object.
     */
    handleKeyUp({ keyCode }) {
        switch (keyCode) {
            case 87: // 'W' key
                this.velocity.y = 0;
                break;
            case 65: // 'A' key
                this.velocity.x = 0;
                break;
            case 83: // 'S' key
                this.velocity.y = 0;
                break;
            case 68: // 'D' key
                this.velocity.x = 0;
                break;
        }
    }
}

export default Player;