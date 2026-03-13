import React, { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";

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
          <div>
            <p>Right col</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Generatior;