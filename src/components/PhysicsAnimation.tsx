import { useEffect, useRef } from "react";
import { Engine, Render, World, Bodies, Runner } from 'matter-js'

function PhysicsAnimation() {
    // Refs for DOM and Matter.js objects
    // These persist between renders and don't cause re-renders when changed
    const canvas = useRef<HTMLDivElement>(null);        // Reference to the container div
    const engine = useRef(Engine.create());             // Physics engine - handles all physics calculations
    const render = useRef<Render | null>(null);         // Renderer - draws the physics objects to canvas
    const runner = useRef<Runner | null>(null);         // Runner - handles the game loop and timing

    // Mouse position tracking refs
    const posX = useRef<number>(0);                     // Current mouse X position relative to canvas
    const posY = useRef<number>(0);                     // Current mouse Y position relative to canvas
    const mouseIntervalRef = useRef<number | null>(null); // Stores interval ID for continuous grain creation

    // Setup and cleanup effect
    useEffect(() => {
        initializeRenderer();                           // Setup physics world on component mount
        window.addEventListener("mousemove", updateMousePosition);

        // Cleanup function runs when component unmounts
        return () => {
            clearRenderer();                            // Clean up physics world
            window.removeEventListener("mousemove", updateMousePosition);
        }
    },[])

    // Initialize the Matter.js physics world
    const initializeRenderer = () => {
        if (!canvas.current) return;
        
        // Get canvas dimensions from the container div
        const height = canvas.current.offsetHeight;
        const width = canvas.current.offsetWidth;
    
        // Get pixel ratio for high DPI displays
        const pixelRatio = window.devicePixelRatio || 1;
    
        // Create the renderer
        render.current = Render.create({
            element: canvas.current,
            engine: engine.current,
            options: {
                width: width,
                height: height,
                wireframes: false,                      // Set to true to see physics outlines
                background: 'var(--tint-orange)',        // Canvas background color
                pixelRatio: pixelRatio,

                //debug stuff
                hasBounds: false,
                showBounds: false,
                showDebug: false,
                showBroadphase: false,
                showAxes: false,
                showConvexHulls: false,
                showCollisions: false,
                showSeparations: false,
                showVelocity: false
            }
        });
    
        // Add boundary walls and floor
        World.add(engine.current.world, [
          // Floor - centered horizontally, slightly below bottom
          Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true, friction: 10 }),
          // Right wall - off screen to the right
          Bodies.rectangle(width+10, height/2, 20, height, { isStatic: true, friction: 10 }),
          // Left wall - off screen to the left
          Bodies.rectangle(-10, height/2, 20, height, { isStatic: true, friction: 10 }),
        ])
    
        // Start the physics simulation
        Render.run(render.current);
        runner.current = Runner.create();
        Runner.run(runner.current, engine.current);
    }
    
    // Creates a new circular particle at the current mouse position
    const addGrain = () => {
        World.add(engine.current.world, [
          Bodies.circle(posX.current, posY.current, 8, {
            friction: 10,                               // How much it resists sliding
            restitution: 1,                         // How bouncy it is (0 = no bounce)
            density: 0.001,                            // How heavy it is
            render: {
              fillStyle: '#FEF4F0',                    // Inner color
              strokeStyle: '#f34e1e',                  // Border color
              lineWidth: 3                             // Border width
            }}),
        ]);
    }
    
    // Cleanup function to remove all Matter.js objects
    const clearRenderer = () => {
        if (render.current) {
            Render.stop(render.current);
            render.current.canvas.remove();
        }
        if (runner.current) {
            Runner.stop(runner.current);
        }
        if (engine.current) {
            World.clear(engine.current.world, false);   // Remove all bodies
            Engine.clear(engine.current);               // Clear the engine
        }
    }

    // Update stored mouse coordinates when mouse moves
    const updateMousePosition = (event: MouseEvent) => {
        if (!canvas.current) return;
        const rect = canvas.current.getBoundingClientRect();
        posX.current = event.clientX - rect.x;         // Convert page coordinates
        posY.current = event.clientY - rect.y;         // to canvas coordinates
    }

    // Start creating grains when mouse is held down
    const handleMouseDown = () => {
        mouseIntervalRef.current = setInterval(() => {
          addGrain();
        }, 20)                                         // Create new grain every 20ms
    }

    // Stop creating grains when mouse is released
    const handleMouseUp = () => {
        if(mouseIntervalRef.current) clearInterval(mouseIntervalRef.current);
    }

    // Render the canvas container
    return (
        <div className="canvas-container">
          <div ref={canvas} 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="animation-container">
          </div>
        </div>
    )
}

export default PhysicsAnimation