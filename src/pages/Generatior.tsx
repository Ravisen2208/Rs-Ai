import React, { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";
import { RectangleHorizontal, RectangleVerticalIcon } from "lucide-react";

const Generatior = () => {
  const [name, setName] = useState('');
  const [ProductName, setProductName] = useState('');
  const [ProductDescripation, setProductDescripation] = useState('');
  const [aspectRatio, setAspectRatio] = useState('9:16');
  const [ProductImage, setProductImage] = useState<File | null>(null);
  const [ModelImage, setModelImage] = useState<File | null>(null);
  const [userPrompt, setUserPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'product' | 'model') => {
    if (e.target.files && e.target.files[0]) {
      if (type === 'product') setProductImage(e.target.files[0]);
      else setModelImage(e.target.files[0]);
    }
  };

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGenerating('Generating...');
    console.log('Generating image with:', { ProductImage, ModelImage, userPrompt });
    // Add your generation logic here
    setIsGenerating(''); // Reset after generation
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form onSubmit={handleGenerate} className="max-w-4xl mx-auto mb-40">
        <Title
          heading="Create In-Context Image"
          description="Upload your model and product image to generate stunning UGC, short-form and social media posts"
        />

        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
          {/* Left column */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone
              label="Product Image"
              file={ProductImage}
              onClear={() => setProductImage(null)}
              onChange={(e) => handleFileChange(e, 'product')}
            />
            <UploadZone
              label="Model Image"
              file={ModelImage}
              onClear={() => setModelImage(null)}
              onChange={(e) => handleFileChange(e, 'model')}
            />
          </div>
          {/* Right column */}
          <div className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block text -sm mb-4">Project Name</label>
            <input
              type="text" id="name" value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name your project." required 
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
           </div>
            <div className="mb-4 text-gray-300">
              <label htmlFor="productName" className="block text -sm mb-4">Product Name</label>
              <input
                type="text" id="productName" value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter the name of the product." required 
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4 text-gray-300">
              <label htmlFor="productDescripation" className="block text -sm mb-4">Product Descripation <span className="text-xs text-violet-400">(optional)</span></label>
              <textarea
                id="productDescripation" value={ProductDescripation}
                onChange={(e) => setProductDescripation(e.target.value)}
                placeholder="Enter the description of the product." required 
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4 text-gray-300">
              <label className="block text -sm mb-4">Aspect Ratio</label>
              <div className="flex gap-3">
              <RectangleVerticalIcon onClick={() => setAspectRatio('9:16')} className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2
                ring-transparent cursor-pointer ${aspectRatio == '9:16' ?
               'ring-violet-500/50 bg-white/10' : `` }  `} />
               <RectangleHorizontal onClick={() => setAspectRatio('16:9')} className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2
                ring-transparent cursor-pointer ${aspectRatio == '16:9' ?
               'ring-violet-500/50 bg-white/10' : `` }  `} />
              </div>
              </div>
              <div className="mb-4 text-gray-300">
              <label htmlFor="userPrompt" className="block text -sm mb-4">User prompt <span className="text-xs text-violet-400">(optional)</span></label>
              <textarea
                id="userPrompt" value={userPrompt}
                onChange={(e) =>setUserPrompt(e.target.value)}
                placeholder=" Describe how you want the narration to be." required 
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Generatior;