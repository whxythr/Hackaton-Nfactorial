# 3D Character Creation Suite with OpenPose Integration

A Next.js application for creating 3D characters with skeleton creation, model creation, and animation tools.

## Features

- **Skeleton Creator**: Draw or detect skeletons from images using OpenPose
- **Model Creator**: Create and edit 3D character models
- **Animation Creator**: Animate your characters

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) (or another port if 3000 is in use) in your browser.

## OpenPose Integration

This project includes integration with OpenPose for automatic skeleton detection from images.

### Using the Demo Mode

By default, the application uses mock data to simulate OpenPose integration without requiring the actual OpenPose library. This is great for development and testing.

### Setting Up the OpenPose Server

To use real OpenPose detection:

1. Navigate to the `openpose-server` directory:

```bash
cd openpose-server
```

2. On Windows, run the server setup script:

```bash
start-server.bat
```

3. On macOS/Linux, follow these steps:

```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set OpenPose path (if you have OpenPose installed)
export OPENPOSE_PATH=/path/to/openpose

# Run the server
python app.py
```

### Installing OpenPose (Optional)

For real pose detection (not using mock data), you need to install OpenPose:

1. Download and install OpenPose from the [official repository](https://github.com/CMU-Perceptual-Computing-Lab/openpose)
2. Follow the installation instructions for your platform
3. Update the `OPENPOSE_PATH` in the server script or environment variable

### Switching Between Demo and Real Mode

The application will automatically detect if the OpenPose server is available. If so, it will use real OpenPose detection. You can toggle between demo and real mode using the button in the Skeleton Creator page.

## Project Structure

- `/src/app`: Main application pages
- `/src/components`: Reusable React components
- `/src/lib`: Utility functions and services
- `/openpose-server`: Python server for OpenPose integration

## Troubleshooting

- **OpenPose Server Not Detected**: Make sure the server is running on http://localhost:8080
- **Port Conflicts**: If port 8080 is in use, change the port in `app.py` and update the endpoint in the application
- **OpenPose Not Found**: The server will still run in mock mode even without OpenPose installed

# Next.js App with Meshy AI 3D Model Generation

This application integrates with Meshy AI to generate 3D models from text prompts. It provides a simple UI for entering text descriptions and viewing the resulting 3D models.

## Features

- Text-to-3D model generation using Meshy AI
- Real-time 3D model preview with Three.js and React Three Fiber
- Responsive UI built with Next.js and Tailwind CSS
- TypeScript for type safety and better development experience

## Getting Started

### Prerequisites

- Node.js 18.x or later
- A Meshy AI API key (get one at [https://meshy.ai](https://meshy.ai))

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env.local` file in the root directory with your Meshy AI API key:
   ```
   MESHY_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Using the Application

1. Enter a detailed description of the 3D model you want to generate in the text box
2. Click "Generate 3D Model"
3. Wait for the model to be generated (this can take up to a minute)
4. Interact with the 3D model in the viewer:
   - Click and drag to rotate
   - Scroll to zoom in/out
   - Right-click and drag to pan
5. Use the "Download 3D Model" link to download the GLB file

## How It Works

The application uses the following technologies:

- **Next.js**: The React framework for building the frontend and API routes
- **Meshy AI API**: For generating 3D models from text descriptions
- **React Three Fiber**: A React renderer for Three.js
- **Three.js**: A JavaScript 3D library
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling

The process flow:

1. User enters a text prompt
2. The frontend sends the prompt to the Next.js API route
3. The API route sends the prompt to Meshy AI
4. Meshy AI processes the prompt and generates a 3D model
5. The API polls for completion and returns the model URL
6. The frontend displays the model in a 3D viewer

## API Reference

### POST /api/model/generate

**Request body**:
```json
{
  "prompt": "A detailed description of the 3D model you want to generate"
}
```

**Response**:
```json
{
  "modelUrl": "https://url-to-the-generated-glb-model.glb",
  "jobId": "meshy-generation-job-id",
  "message": "Generated 3D model based on your prompt"
}
```

## About Meshy AI

[Meshy AI](https://meshy.ai/) is a service that provides text-to-3D model generation. You'll need to sign up for an account and obtain an API key to use this application.

## Important Notes

- The model generation process can take some time (typically 30-60 seconds or more).
- The current implementation polls the Meshy API every 5 seconds for up to 10 attempts (50 seconds). For production use, consider implementing a webhook-based approach.
- If model generation fails, a default fallback model will be returned.

## License

This project is licensed under the MIT License. 