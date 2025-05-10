import Lottie from 'lottie-react'
import animationData from '../public/animation-loading.json'

const LottieAnimation = () => {
    return (
        <div style={{ width: 200, height: 200 }}>
            <Lottie animationData={animationData} loop={true} />
        </div>
    )
}
export default LottieAnimation