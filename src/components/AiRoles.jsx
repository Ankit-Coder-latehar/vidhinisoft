import React from "react";
import {
  Database,
  BarChart3,
  Cpu,
  Layers,
  Eye,
  MessageSquare,
} from "lucide-react";

const Roles = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Roles</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Artificial Intelligence is a field in constant evolution that
            requires specialized talent to apply effective and innovative
            solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20">
          {/* Data Engineer */}
          <div className="flex gap-6">
            <Database className="text-blue-400 w-10 h-10 shrink-0" />
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Data Engineer:
              </h3>
              <ul className="text-gray-500 space-y-3 list-disc list-inside">
                <li>
                  They are responsible for designing, building, and managing
                  data infrastructure.
                </li>
                <li>
                  They prepare and clean data for analysis and modeling.
                </li>
              </ul>
            </div>
          </div>

          {/* Data Scientist */}
          <div className="flex gap-6">
            <BarChart3 className="text-blue-400 w-10 h-10 shrink-0" />
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Data Scientist:
              </h3>
              <ul className="text-gray-500 space-y-3 list-disc list-inside">
                <li>
                  They develop statistical models and machine learning
                  algorithms.
                </li>
                <li>
                  They analyze and extract insights from large volumes of data.
                </li>
              </ul>
            </div>
          </div>

          {/* Machine Learning Engineer */}
          <div className="flex gap-6">
            <Cpu className="text-blue-400 w-10 h-10 shrink-0" />
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Machine Learning Engineer:
              </h3>
              <ul className="text-gray-500 space-y-3 list-disc list-inside">
                <li>
                  They implement and maintain machine learning models in
                  production.
                </li>
                <li>
                  They work on optimizing and scaling models.
                </li>
              </ul>
            </div>
          </div>

          {/* AI Engineer */}
          <div className="flex gap-6">
            <Layers className="text-blue-400 w-10 h-10 shrink-0" />
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                AI Engineer:
              </h3>
              <ul className="text-gray-500 space-y-3 list-disc list-inside">
                <li>
                  They specialize in developing and deploying AI applications.
                </li>
                <li>
                  They work with deep learning techniques and neural networks.
                </li>
              </ul>
            </div>
          </div>

          {/* Computer Vision */}
          <div className="flex gap-6">
            <Eye className="text-blue-400 w-10 h-10 shrink-0" />
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Computer Vision Specialist:
              </h3>
              <ul className="text-gray-500 space-y-3 list-disc list-inside">
                <li>
                  They develop algorithms and systems to interpret images and
                  videos.
                </li>
                <li>
                  They work on applications like object recognition and image
                  analysis.
                </li>
              </ul>
            </div>
          </div>

          {/* NLP Engineer */}
          <div className="flex gap-6">
            <MessageSquare className="text-blue-400 w-10 h-10 shrink-0" />
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                NLP Engineer:
              </h3>
              <ul className="text-gray-500 space-y-3 list-disc list-inside">
                <li>
                  They develop systems to understand and generate human
                  language.
                </li>
                <li>
                  They work on applications such as chatbots, text analysis,
                  and machine translation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roles;
