import dynamic from 'next/dynamic';

const BackgroundGradientAnimation = dynamic(() => import('./GradientBg').then(mod => mod.BackgroundGradientAnimation), { ssr: false });

export default BackgroundGradientAnimation;