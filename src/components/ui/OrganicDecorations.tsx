import React from "react";
import {
  SparkleStar as Star,
  OrganicLeaf as Leaf,
  BotanicalBranch as Branch,
  LittleHeartDoodle as Heart,
} from "@/components/icons";

export const SparkleStar: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = "",
  color = "#8B7FD1",
  size = 16,
}) => <Star size={size} color={color} className={className} />;

export const PlusSparkle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-3.5 h-3.5",
  color = "#B4C4EA",
}) => (
  <span
    className={`font-bold inline-block select-none pointer-events-none ${className}`}
    style={{ color }}
    aria-hidden="true"
  >
    +
  </span>
);

export const SoftLeaf: React.FC<{ className?: string; color?: string; flip?: boolean; size?: number }> = ({
  className = "",
  color = "#8B7FD1",
  flip = false,
  size = 24,
}) => <Leaf size={size} color={color} flip={flip} className={className} />;

export const LeafBranch: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 64,
}) => <Branch size={size} className={className} />;

export const LittleHeartDoodle: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = "",
  color = "#8B7FD1",
  size = 18,
}) => <Heart size={size} color={color} className={className} />;
