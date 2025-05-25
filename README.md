# 3D Creator Suite

A comprehensive web application for 3D model creation, manipulation, and animation.

## Project Structure

This Next.js project uses a src-based directory structure:

```
/
├── src/               # Source directory
│   ├── app/           # Next.js App Router
│   │   ├── api/       # API routes
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   ├── pages/         # Next.js Pages Router (if used)
│   ├── components/    # Reusable components
│   ├── utils/         # Utility functions
│   ├── lib/           # Library code
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
├── .next/             # Next.js build output
├── next.config.js     # Next.js configuration
└── jsconfig.json      # JavaScript/TypeScript configuration
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Key Features

- AI-powered 3D model generation from text descriptions
- Character skeleton creation and rigging tools
- Animation generation with customizable parameters
- Support for industry-standard file formats (GLB, FBX, DAE)
- Real-time 3D previews and editing capabilities

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

## License

This project is licensed under the MIT License. 