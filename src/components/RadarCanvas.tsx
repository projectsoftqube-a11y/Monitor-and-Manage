"use client";

import React, { useEffect, useRef, useState } from "react";

interface SecurityNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  name: string;
  status: string;
  pulseSpeed: number;
  pulsePhase: number;
}

interface ClickShockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

const GUARD_NAMES = [
  "S. Jenkins",
  "M. Carter",
  "A. Petrov",
  "D. Vance",
  "R. Chen",
  "L. Alvarez",
  "K. O'Connor",
  "T. Saito",
];

const COLORS = [
  { main: "#22c55e", glow: "rgba(34, 197, 94, 0.4)", status: "ACTIVE" }, // Emerald
  { main: "#3b82f6", glow: "rgba(59, 130, 246, 0.4)", status: "SYNCED" }, // Blue
  { main: "#a855f7", glow: "rgba(168, 85, 247, 0.4)", status: "PATROL" }, // Purple
  { main: "#f43f5e", glow: "rgba(244, 63, 94, 0.4)", status: "SOS_PENDING" }, // Rose Alert
];

export default function RadarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const [hudText, setHudText] = useState("SYSTEM: INITIALIZING MONITORING...");
  const nodesRef = useRef<SecurityNode[]>([]);
  const shockwavesRef = useRef<ClickShockwave[]>([]);
  const sweepAngleRef = useRef(0);

  // Periodic randomizing cyber text for the HUD coordinates
  useEffect(() => {
    if (!isHovered) {
      setHudText("SYSTEM: IDLE SCANNING");
      return;
    }

    const intervals = [
      "STATUS: LOCKING TARGET NODE...",
      "TARGET VERIFIED • CELLULAR SYNC",
      "GEOFENCE SECTOR: SEC_A_404",
      "SECURE DATABASE CONNECTED",
      "DECRYPTING FIELD COORDINATES...",
      "SIGNAL LEVEL: 100% STABLE",
    ];

    const interval = setInterval(() => {
      const randomText = intervals[Math.floor(Math.random() * intervals.length)];
      setHudText(randomText);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Handle high-DPI scaling
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Initialize guard nodes inside the radar range once resized
      if (nodesRef.current.length === 0) {
        const tempNodes: SecurityNode[] = [];
        const numNodes = 7;
        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = Math.min(width, height) * 0.4;

        for (let i = 0; i < numNodes; i++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = (0.2 + Math.random() * 0.6) * maxRadius;
          const x = centerX + Math.cos(angle) * dist;
          const y = centerY + Math.sin(angle) * dist;
          
          const speed = 0.3 + Math.random() * 0.4;
          const moveAngle = Math.random() * Math.PI * 2;

          const colorScheme = COLORS[Math.floor(Math.random() * COLORS.length)];

          tempNodes.push({
            x,
            y,
            vx: Math.cos(moveAngle) * speed,
            vy: Math.sin(moveAngle) * speed,
            radius: 4.5 + Math.random() * 2,
            color: colorScheme.main,
            glowColor: colorScheme.glow,
            name: GUARD_NAMES[i % GUARD_NAMES.length],
            status: colorScheme.status,
            pulseSpeed: 0.05 + Math.random() * 0.05,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
        nodesRef.current = tempNodes;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radarRadius = Math.min(width, height) * 0.45;

      // 1. Draw Concentric Grid Circles
      ctx.strokeStyle = "rgba(148, 163, 184, 0.08)";
      ctx.lineWidth = 1;
      for (let r = 0.2; r <= 1.0; r += 0.2) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radarRadius * r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 2. Draw Crosshairs & Micro Radar Markings
      ctx.strokeStyle = "rgba(148, 163, 184, 0.12)";
      ctx.beginPath();
      // Horizontal guide
      ctx.moveTo(centerX - radarRadius, centerY);
      ctx.lineTo(centerX + radarRadius, centerY);
      // Vertical guide
      ctx.moveTo(centerX, centerY - radarRadius);
      ctx.lineTo(centerX, centerY + radarRadius);
      ctx.stroke();

      // Outer ticks
      ctx.strokeStyle = "rgba(148, 163, 184, 0.15)";
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 360; i += 30) {
        const rad = (i * Math.PI) / 180;
        const outerX = centerX + Math.cos(rad) * radarRadius;
        const outerY = centerY + Math.sin(rad) * radarRadius;
        const innerX = centerX + Math.cos(rad) * (radarRadius - 5);
        const innerY = centerY + Math.sin(rad) * (radarRadius - 5);
        ctx.beginPath();
        ctx.moveTo(innerX, innerY);
        ctx.lineTo(outerX, outerY);
        ctx.stroke();
      }

      // 3. Draw Sonar Rotating Sweep Trail (Out-of-the-box glow fade)
      sweepAngleRef.current = (sweepAngleRef.current + 0.006) % (Math.PI * 2);
      const sweepAngle = sweepAngleRef.current;

      const gradientSteps = 60;
      for (let i = 0; i < gradientSteps; i++) {
        const stepAngle = sweepAngle - (i * 0.02);
        const alpha = Math.max(0, 0.25 - (i / gradientSteps) * 0.25);
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(
          centerX,
          centerY,
          radarRadius,
          stepAngle - 0.02,
          stepAngle,
          false
        );
        ctx.lineTo(centerX, centerY);
        ctx.fill();
      }

      // Highlight leading edge of sonar sweep
      ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(sweepAngle) * radarRadius,
        centerY + Math.sin(sweepAngle) * radarRadius
      );
      ctx.stroke();

      // 4. Update and Draw Click Shockwaves
      shockwavesRef.current.forEach((wave, waveIdx) => {
        wave.radius += 3.5;
        wave.opacity = Math.max(0, 1 - wave.radius / wave.maxRadius);

        ctx.strokeStyle = `rgba(59, 130, 246, ${wave.opacity * 0.5})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Secondary inner ripple
        if (wave.radius > 20) {
          ctx.strokeStyle = `rgba(99, 102, 241, ${wave.opacity * 0.25})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(wave.x, wave.y, wave.radius - 20, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Filter out completed shockwaves
      shockwavesRef.current = shockwavesRef.current.filter((w) => w.opacity > 0);

      // 5. Update and Draw Security Nodes (Guards)
      const nodes = nodesRef.current;
      nodes.forEach((node) => {
        // Simple drift physics
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += node.pulseSpeed;

        // Bounce back from outer radar boundary with soft redirection
        const dx = node.x - centerX;
        const dy = node.y - centerY;
        const distFromCenter = Math.sqrt(dx * dx + dy * dy);

        if (distFromCenter > radarRadius * 0.9) {
          const angle = Math.atan2(dy, dx);
          // Bounce inwards
          node.vx = -Math.cos(angle) * (0.3 + Math.random() * 0.3);
          node.vy = -Math.sin(angle) * (0.3 + Math.random() * 0.3);
          // Clamp position
          node.x = centerX + Math.cos(angle) * radarRadius * 0.89;
          node.y = centerY + Math.sin(angle) * radarRadius * 0.89;
        }

        // Apply physical push from shockwaves
        shockwavesRef.current.forEach((wave) => {
          const sDx = node.x - wave.x;
          const sDy = node.y - wave.y;
          const sDist = Math.sqrt(sDx * sDx + sDy * sDy);

          // If close to expanding shockwave boundary, push node away
          const waveTolerance = 15;
          if (Math.abs(sDist - wave.radius) < waveTolerance && sDist > 0) {
            const force = (1 - wave.radius / wave.maxRadius) * 2.8;
            node.vx += (sDx / sDist) * force;
            node.vy += (sDy / sDist) * force;
          }
        });

        // Apply drag/friction so nodes don't speed up infinitely
        node.vx *= 0.95;
        node.vy *= 0.95;
        // Keep minimum baseline speed so they don't stop drifting completely
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed < 0.2) {
          const driftAngle = Math.random() * Math.PI * 2;
          node.vx += Math.cos(driftAngle) * 0.15;
          node.vy += Math.sin(driftAngle) * 0.15;
        }

        // Draw node pulse aura
        const pulse = 1 + Math.sin(node.pulsePhase) * 0.3;
        ctx.fillStyle = node.glowColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Draw core node
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add sleek dark outline to nodes
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Micro labels next to nodes (Guard name / status)
        ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
        ctx.font = "bold 8px ui-sans-serif, system-ui, sans-serif";
        ctx.fillText(node.name, node.x + node.radius + 5, node.y - 2);

        ctx.fillStyle = node.color;
        ctx.font = "800 6px ui-sans-serif, system-ui, sans-serif";
        ctx.fillText(node.status, node.x + node.radius + 5, node.y + 6);
      });

      // 6. Draw Telemetry Line Webs (connecting nearby nodes)
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const distance = Math.sqrt((n1.x - n2.x) ** 2 + (n1.y - n2.y) ** 2);
          
          if (distance < 90) {
            const alpha = (1 - distance / 90) * 0.22;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.setLineDash([2, 2]);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
            ctx.setLineDash([]); // Reset
          }
        }
      }

      // 7. Draw Mouse Tracking Hud Overlay (Scanner Targeting)
      if (isHovered && mousePos.x > 0 && mousePos.y > 0) {
        ctx.strokeStyle = "rgba(37, 99, 235, 0.35)";
        ctx.lineWidth = 1;

        // Dotted tracking lines crossing screen from cursor
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        ctx.moveTo(0, mousePos.y);
        ctx.lineTo(width, mousePos.y);
        ctx.moveTo(mousePos.x, 0);
        ctx.lineTo(mousePos.x, height);
        ctx.stroke();
        ctx.setLineDash([]);

        // Cursor targeting reticle
        ctx.strokeStyle = "#2563eb";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 16, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Corner sweep indicators around the cursor reticle
        const size = 6;
        ctx.beginPath();
        // Top-left
        ctx.moveTo(mousePos.x - 22, mousePos.y - 22 + size);
        ctx.lineTo(mousePos.x - 22, mousePos.y - 22);
        ctx.lineTo(mousePos.x - 22 + size, mousePos.y - 22);
        // Top-right
        ctx.moveTo(mousePos.x + 22 - size, mousePos.y - 22);
        ctx.lineTo(mousePos.x + 22, mousePos.y - 22);
        ctx.lineTo(mousePos.x + 22, mousePos.y - 22 + size);
        // Bottom-left
        ctx.moveTo(mousePos.x - 22, mousePos.y + 22 - size);
        ctx.lineTo(mousePos.x - 22, mousePos.y + 22);
        ctx.lineTo(mousePos.x - 22 + size, mousePos.y + 22);
        // Bottom-right
        ctx.moveTo(mousePos.x + 22 - size, mousePos.y + 22);
        ctx.lineTo(mousePos.x + 22, mousePos.y + 22);
        ctx.lineTo(mousePos.x + 22, mousePos.y + 22 - size);
        ctx.stroke();

        // Cyber coordinate tags
        const roundedX = Math.round(mousePos.x * 2.4);
        const roundedY = Math.round(mousePos.y * 1.8);

        ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
        ctx.fillRect(mousePos.x + 28, mousePos.y - 22, 120, 44);
        ctx.strokeStyle = "rgba(37, 99, 235, 0.4)";
        ctx.lineWidth = 1;
        ctx.strokeRect(mousePos.x + 28, mousePos.y - 22, 120, 44);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 8px monospace";
        ctx.fillText(`LOC: X_${roundedX} / Y_${roundedY}`, mousePos.x + 34, mousePos.y - 12);
        
        ctx.fillStyle = "#3b82f6";
        ctx.font = "800 6px monospace";
        ctx.fillText(hudText, mousePos.x + 34, mousePos.y - 2);

        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.font = "700 7px monospace";
        ctx.fillText("PING: SECURE_LINK_OK", mousePos.x + 34, mousePos.y + 8);

        ctx.fillStyle = "#22c55e";
        ctx.font = "900 6px monospace";
        ctx.fillText("DEC: STABLE SCAN", mousePos.x + 34, mousePos.y + 16);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, isHovered, hudText]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Add a physics-displacement shockwave at click coordinate
    shockwavesRef.current.push({
      x: clickX,
      y: clickY,
      radius: 0,
      maxRadius: 160,
      opacity: 1,
    });
  };

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto z-0 select-none">
      <canvas
        ref={canvasRef}
        className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] cursor-crosshair overflow-visible pointer-events-auto"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: -1000, y: -1000 });
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}
