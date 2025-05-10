"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const Comment = ({ comment }: { comment: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const longComment = comment.length > 130;
    const displayComment = longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;

    return (
        <div className="text-sm text-secondary-foreground">
            <p className="leading-relaxed">
                {displayComment}
                
                {longComment && (
                    <Button
                        variant={"link"}
                        className={`${isExpanded ? 'text-muted-foreground' : 'text-primary'} pl-1 h-0`}
                        onClick={toggleExpanded}
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </Button>
                )}
            </p>
        </div>
    )
}
export default Comment