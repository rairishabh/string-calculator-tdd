import React, { useState } from 'react';
import {createStringCalculator} from '../utils/StringCalculator.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const calculator = createStringCalculator();

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!input.trim()) {
      toast.info('Please enter some numbers to calculate', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const processedInput = input.replace(/\\n/g, '\n');
      const sum = calculator.add(processedInput);
      setResult(sum);
      toast.success(`Sum calculated: ${sum}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      setResult(null);
      toast.error(err.message || 'An error occurred', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCalculate();
    }
  };

  const examples = [
    { 
      input: "1,2,3", 
      displayInput: "1,2,3", 
      output: 6, 
      description: "Basic comma-separated" 
    },
    { 
      input: "1\\n2,3", 
      displayInput: "1\\n2,3", 
      output: 6, 
      description: "Using newlines" 
    },
    { 
      input: "//;\\n1;2;3", 
      displayInput: "//;\\n1;2;3", 
      output: 6, 
      description: "Custom delimiter" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4">
      <ToastContainer />
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-colorPrimary p-6 text-white">
          <h1 className="text-3xl font-bold">String Calculator</h1>
          <p className="mt-2 opacity-90">
            Transform your string of numbers into sums instantly
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Enter your numbers
            </label>
            <textarea
              className="w-full p-4 border border-gray-200 rounded-lg min-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-800 text-lg shadow-sm transition-shadow duration-200 font-mono"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Example: 1,2,3 or 1\n2,3"
            />
            <p className="text-sm text-gray-500">
              Use \n for newlines (e.g., 1\n2,3)
            </p>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-colorPrimary text-white py-4 px-6 rounded-lg hover:bg-[#113a60] transform hover:scale-[1.02] transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Calculate Sum
          </button>

          {result !== null && (
            <div className="p-6 bg-green-50 rounded-lg border border-green-100 transform animate-fade-in">
              <p className="text-2xl font-bold text-green-700 text-center">
                Result: {result}
              </p>
            </div>
          )}

          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Examples</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {examples.map((example, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => setInput(example.input)}
                >
                  <code className="block text-sm font-mono bg-white p-2 rounded border mb-2">
                    {example.displayInput}
                  </code>
                  <p className="text-sm text-gray-600">{example.description}</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">
                    Result: {example.output}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;