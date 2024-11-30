"use client"
import { motion } from 'framer-motion';
import { memo } from 'react';

interface SkillBarProps {
    title: string;       // Title of the skill
    percentage: number;  // Percentage of the skill's progress (0 to 100)
    progressClass: string; // Class name for styling the progress bar (background color, etc.)
}

const SkillBar = (props: SkillBarProps) => {
    const { title, percentage, progressClass } = props
    return (
        <div className="skill-bar-item mb-30">
            <div className="title-wrap">
                <h5 className="title capitalize">{title}</h5>
                <span className="count">{percentage}%</span>
            </div>
            <div className="progress-bar-wrap">
                <motion.div
                    className={`progress-line ${progressClass}`}
                    style={{ width: '100%' }} // Set width to 100% to animate
                    initial={{ width: 0 }} // Start from 0%
                    animate={{ width: `${percentage}%` }} // Animate to the provided percentage
                    transition={{ duration: 3 }} // Duration of the animation
                />
            </div>
        </div>
    );
};

export default memo(SkillBar)