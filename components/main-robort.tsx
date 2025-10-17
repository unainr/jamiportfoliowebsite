'use client';

import React from 'react';
import { InteractiveRobotSpline } from './robort';
import { motion } from 'framer-motion';

export function MainRobort() {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0"
      />

      <div
        className="
          absolute inset-0 z-10
          flex items-center
          px-6 md:px-16
          pointer-events-none
        "
      >
        <motion.div
          className="max-w-2xl text-white drop-shadow-lg pointer-events-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-violet-400">Jami Raza</span>
          </h1>

          <h2 className="text-3xl text-violet-300 font-semibold mt-4">
            Full Stack Developer | Flutter &amp; .NET Expert
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mt-6 leading-relaxed max-w-lg">
            Building seamless, scalable digital experiences.<br />
            Let’s build the future together.
          </p>

          {/* Download Resume Button */}
          <a
            href="Resume.pdf" // <- place your resume file in /public folder
            download
            className="
              inline-block mt-8 px-6 py-3
              bg-violet-500 hover:bg-violet-600
              text-white font-semibold rounded-xl
              shadow-lg transition duration-300
            "
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}
