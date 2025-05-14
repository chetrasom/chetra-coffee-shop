import TestProductsGrid from "./products/TestProductsGrid"
import TestProductsGridTwo from "./products/TestProductsGridTwo"
import TestProductsGridThree from "./products/TestProductsGridThree"
import { Button } from "./ui/button"
import TestProductsGridFour from "./products/TestProductsFour"

const Testing = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="container flex flex-wrap gap-6">
                <TestProductsGridFour img="/img/products/instant-01.png" />
                <TestProductsGridFour img="/img/products/rd-04.png" />
                <TestProductsGridFour img="/img/popular-coffee-2.png" />

                <TestProductsGrid img="/img/products/instant-01.png" />
                <TestProductsGridTwo img="/img/products/instant-02.png" />
                <TestProductsGridThree img="/img/popular-coffee-1.png" />
                <TestProductsGrid img="/img/products/rd-03.png" />

                <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#f5d8b7]">
                    <h1 className="font-poppins text-4xl font-bold text-[#4E342E]">Coffee Shop</h1>
                    <p className="text-[#333333] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <div className="flex gap-x-4">
                        {/* <Button variant={"outline"} className=" rounded-lg h-11 px-6">Order Now</Button> */}
                        <Button variant={"outline"} className=" rounded-lg h-11 px-6 text-[#4E342E]">Order Now</Button>
                        {/* <Button className="bg-[#F28E1C] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        <Button className="bg-[#bd7a38] rounded-lg h-11 px-6 capitalize">Order Now</Button>
                        {/* <Button className="bg-[#4E342E] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                    </div>
                </div>

                <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#f5d8b7]/10 shadow-lg">
                    <h1 className="font-poppins text-4xl font-bold text-[#4E342E]">Coffee Shop</h1>
                    <p className="text-[#333333] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <div className="flex gap-x-4">
                        {/* <Button variant={"outline"} className=" rounded-lg h-11 px-6">Order Now</Button> */}
                        <Button variant={"outline"} className=" rounded-lg h-11 px-6 text-[#4E342E]">Order Now</Button>
                        {/* <Button className="bg-[#F28E1C] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        <Button className="bg-[#bd7a38] rounded-lg h-11 px-6 capitalize">Order Now</Button>
                        {/* <Button className="bg-[#4E342E] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                    </div>
                </div>

                <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#f5d8b7]">
                    <h1 className="font-poppins text-4xl font-bold text-[#4E342E]">Coffee Shop</h1>
                    <p className="text-[#333333] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <div className="flex gap-x-4">
                        {/* <Button variant={"outline"} className=" rounded-lg h-11 px-6">Order Now</Button> */}
                        <Button variant={"outline"} className=" rounded-lg h-11 px-6 text-[#4E342E]">Order Now</Button>
                        {/* <Button className="bg-[#F28E1C] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        {/* <Button className="bg-[#bd7a38] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        <Button className="bg-[#4E342E] rounded-lg h-11 px-6 capitalize">Order Now</Button>
                    </div>
                </div>

                <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#ead7b9]">
                    <h1 className="font-poppins text-4xl font-bold text-[#4E342E]">Coffee Shop</h1>
                    <p className="text-[#333333] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <div className="flex gap-x-4">
                        {/* <Button variant={"outline"} className=" rounded-lg h-11 px-6">Order Now</Button> */}
                        <Button variant={"outline"} className=" rounded-lg h-11 px-6 text-[#4E342E]">Order Now</Button>
                        {/* <Button className="bg-[#F28E1C] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        {/* <Button className="bg-[#bd7a38] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        <Button className="bg-[#F28E1C] rounded-lg h-11 px-6 capitalize">Order Now</Button>
                    </div>
                </div>

                {/* <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#D7C3A7]">
                    <h1 className="font-poppins text-4xl font-bold text-[#4E342E]">Coffee Shop</h1>
                    <p className="text-[#333333] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <Button className="bg-[#F28E1C] rounded-lg h-11 px-6">Order Now</Button>
                </div> */}

                {/* ------------ DARK ------------ */}
                <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#1C1B1A]">
                    {/* <h1 className="font-poppins text-4xl font-bold text-[#f6eedb]">Coffee Shop</h1> */}
                    <h1 className="font-poppins text-4xl font-bold text-[#f5d8b7]">Coffee Shop</h1>
                    {/* <h1 className="font-poppins text-4xl font-bold text-[#ead7b9]">Coffee Shop</h1> */}
                    <p className="text-[#F5F5F5] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <div className="flex gap-x-4">
                        {/* <Button variant={"outline"} className=" rounded-lg h-11 px-6">Order Now</Button> */}
                        <Button variant={"outline"} className=" rounded-lg h-11 px-6 text-[#4E342E]">Order Now</Button>
                        {/* <Button className="bg-[#F28E1C] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        <Button className="bg-[#bd7a38] rounded-lg h-11 px-6 capitalize">Order Now</Button>
                    </div>
                </div>

                <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#1C1B1A]">
                    <h1 className="font-poppins text-4xl font-bold text-[#C49A6C]">Coffee Shop</h1>
                    <p className="text-[#F5F5F5] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <div className="flex gap-x-4">
                        {/* <Button variant={"outline"} className=" rounded-lg h-11 px-6">Order Now</Button> */}
                        <Button variant={"outline"} className=" rounded-lg h-11 px-6 text-[#4E342E]">Order Now</Button>
                        {/* <Button className="bg-[#F28E1C] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        {/* <Button className="bg-[#bd7a38] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        <Button className="bg-[#4E342E] rounded-lg h-11 px-6 capitalize">Order Now</Button>
                    </div>
                </div>

                <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#1C1B1A]">
                    <h1 className="font-poppins text-4xl font-bold text-[#C49A6C]">Coffee Shop</h1>
                    <p className="text-[#F5F5F5] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <div className="flex gap-x-4">
                        {/* <Button variant={"outline"} className=" rounded-lg h-11 px-6">Order Now</Button> */}
                        <Button variant={"outline"} className=" rounded-lg h-11 px-6 text-[#4E342E]">Order Now</Button>
                        {/* <Button className="bg-[#F28E1C] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        {/* <Button className="bg-[#bd7a38] rounded-lg h-11 px-6 capitalize">Order Now</Button> */}
                        <Button className="bg-[#F28E1C] rounded-lg h-11 px-6 capitalize">Order Now</Button>
                    </div>
                </div>

                <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#4e342e]">
                    <h1 className="font-poppins text-4xl font-bold text-[#f6eedb]">Coffee Shop</h1>
                    <p className="text-[#F5F5F5] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <Button className="bg-[#bd7a38] rounded-lg h-11 px-6">Order Now</Button>
                </div>

                <div className="w-[350px] rounded-xl p-5 flex flex-col justify-center bg-[#4e342e]">
                    <h1 className="font-poppins text-4xl font-bold text-[#d5d0c3]">Coffee Shop</h1>
                    <p className="text-[#F5F5F5] pt-2.5 pb-5">
                        Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                    </p>
                    <Button className="bg-[#bd7a38] rounded-lg h-11 px-6">Order Now</Button>
                </div>

                {/* --------------------- CARD --------------------- */}

            </div>

            <div className="flex gap-x-4 mt-14">
                <Button className="bg-[#4E342E]">Order Now</Button>
                <Button className="bg-[#D7C3A7]">Order Now</Button>
                <Button className="bg-[#C49A6C]">Order Now</Button>
                <Button className="bg-[#F28E1C]">Order Now</Button>
                <Button className="bg-[#333333]">Order Now</Button>
            </div>
            <div className="flex gap-x-4 mt-10">
                <Button className="bg-[#1C1B1A]">Order Now</Button>
                <Button className="bg-[#F5F5F5]">Order Now</Button>
                <Button className="bg-[#C49A6C]">Order Now</Button>
                <Button className="bg-[#F28E1C]">Order Now</Button>
                <Button className="bg-[]">Order Now</Button>
            </div>
        </div>
    )
}
export default Testing