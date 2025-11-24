"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 300;
const MAX_CONNECTIONS = 3;
const CONNECTION_DISTANCE = 160;
const PARTICLE_SPEED = 0.7;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrameId: number;
    let particles: Particle[] = [];
    let viewWidth = 0;
    let viewHeight = 0;

    const randomVelocity = () => (Math.random() - 0.5) * PARTICLE_SPEED;

    const createParticles = (width: number, height: number) => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: randomVelocity(),
        vy: randomVelocity(),
      }));
    };

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      const width = parent?.clientWidth ?? window.innerWidth;
      const height = parent?.clientHeight ?? window.innerHeight;

      const previousWidth = viewWidth || width;
      const previousHeight = viewHeight || height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!particles.length) {
        createParticles(width, height);
      } else {
        const widthRatio = previousWidth ? width / previousWidth : 1;
        const heightRatio = previousHeight ? height / previousHeight : 1;

        particles = particles.map((particle) => ({
          ...particle,
          x: Math.min(Math.max(particle.x * widthRatio, 0), width),
          y: Math.min(Math.max(particle.y * heightRatio, 0), height),
        }));
      }

      viewWidth = width;
      viewHeight = height;
    };

    setCanvasSize();

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      context.clearRect(0, 0, width, height);

      const connectionCounts = new Array(particles.length).fill(0);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, 2.1, 0, Math.PI * 2);
        context.fillStyle = "rgba(125, 211, 252, 0.85)";
        context.fill();

        for (let i = index + 1; i < particles.length; i += 1) {
          if (connectionCounts[index] >= MAX_CONNECTIONS) {
            break;
          }
          if (connectionCounts[i] >= MAX_CONNECTIONS) {
            continue;
          }

          const other = particles[i];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance <= CONNECTION_DISTANCE) {
            const alpha = 0.6 - distance / (CONNECTION_DISTANCE * 1.1);
            if (alpha <= 0) {
              continue;
            }

            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(125, 211, 252, ${alpha.toFixed(3)})`;
            context.lineWidth = 0.8;
            context.stroke();

            connectionCounts[index] += 1;
            connectionCounts[i] += 1;
          }
        }
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      setCanvasSize();
    };

    animationFrameId = window.requestAnimationFrame(render);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    />
  );
}
