"use client";

import { useState } from "react";
import { Button } from "../ui/button";

import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import RatingInput from "./RatingInput";
import TextAreaInput from "../form/TextAreaInput";

import { createReviewAction } from "@/utils/actions";
import { useUser } from '@clerk/nextjs';

import { BiSolidChevronsDown } from "react-icons/bi";
import BorderGradient from "../BorderGradient";

const SubmitReview = ({ productId }: { productId: string }) => {
    const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
    const { user } = useUser();
    
    return (
        <div className="mt-16">
            <div className="text-center py-8 lg:py-12">
                <Button 
                    aria-label="toggle-form"
                    variant={isReviewFormVisible ? 'default' : 'outline'}
                    className={`btn-default w-full lg:max-w-max uppercase`}
                    onClick={() => setIsReviewFormVisible((prev) => !prev)}
                >
                    {isReviewFormVisible ? (
                        <h3 className="tracking-wider text-white">Writing...</h3>
                    ) : (
                        <h3 className="flex items-center gap-x-1 tracking-wider">
                            Write a review <BiSolidChevronsDown className="w-4 h-4" />
                        </h3>
                    )}
                    
                </Button>
            </div>

            {isReviewFormVisible && (
                <div className="bg-muted rounded-xl overflow-hidden p-5 max-w-2xl mx-auto">
                    <FormContainer action={createReviewAction}>
                        {/* Trigger Hidden */}
                        <input type='hidden' name='productId' value={productId} />
                        <input type='hidden' name='authorName' value={user?.firstName || 'user'} />
                        <input type='hidden' name='authorImageUrl' value={user?.imageUrl || ''} />

                        <div className="mb-5">
                            <h3 className="h3 text-center pb-2">Your Review</h3>
                            <BorderGradient />
                        </div>
                        <div className="space-y-4 mb-5">
                            <RatingInput name='rating' />
                            <TextAreaInput
                                name='comment'
                                labelText='feedback'
                                defaultValue='Good Quality Product !!!'
                            />
                        </div>
                        <SubmitButton text="Post review" />
                    </FormContainer>
                </div>
            )}
            
        </div>
    )
}
export default SubmitReview