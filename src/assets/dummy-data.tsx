import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Drag and drop your assets. We auto-optimize formats and sizes .'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instent Generation ',
        desc: 'Optimised models deliver output in seconds with great fidelity.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring Product short to life with short-from, social-ready videos in seconds.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '₹145',
        desc: 'Try the platfrom at no cost.',
        credits: '25',
        features: [
            '25 Credits  ',
            'Standard quality.',
            'No watermark',
            'One user',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '₹399',
        desc: ' small teams and creators.',
        credits: '80',
        features: [
            '80 Credits ',
            'High quality',
            'No watermark',
            'Up to 3 users',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '₹799',
        desc: 'Big brands and agencies.',
        credits: '300',
        features: [
            '300 Credits ',
            'FHD quality',
            'No watermark',
            'Up to 5 users',
            'Fast generation',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation work?',
        answer: 'We leverage state-of-the-art diffusion models trained on diverse datasets. You upload your assets, select styles and parameters, and our AI generates optimized product visuals in seconds.'
    },
    {
        question: 'Do I own the generated image?',
        answer: 'YES- you retain full ownership and commercial rights to all images generated using our platform. We do not claim any rights over your content.'
    },
    {
        question: 'Can I caancel anytime?',
        answer: 'YES- Our subscription plans are flexible with no long-term commitments. You can cancel or change your plan at any time from your account settings without any penalties.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We accept common image formats like JPEG, PNG, and SVG. For video synthesis, we support MP4 and MOV formats. Our platform automatically optimizes your uploads for the best results.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/ravisen2004/" },
            { name: "GitHub", url: "https://github.com/Ravisen2208" }
        ]
    }
];