
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

// Template Problem/Solution Section
interface ProblemSectionProps {
  title: string;
  subtitle: string;
  problems: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  solution?: {
    title: string;
    description: string;
  };
  backgroundImage?: string;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  subtitle,
  problems,
  solution,
  backgroundImage
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${backgroundImage}')`
          }}
        />
      )}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-primary mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {solution && (
          <div className="text-center mt-12">
            <div className="bg-brand-secondary/10 border border-brand-secondary/20 rounded-lg p-8 max-w-4xl mx-auto backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">
                {solution.title}
              </h3>
              <p className="text-lg text-gray-700">
                {solution.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Template Process/Methodology Section
interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: Array<{
    stage: string;
    title: string;
    color: string;
    icon: string;
    description: string;
    focus: string;
  }>;
  callToAction?: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  title,
  subtitle,
  steps,
  callToAction
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${step.color}`}>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-sm font-medium mb-2">{step.stage}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="leading-relaxed mb-4">{step.description}</p>
                <div className="border-t pt-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">
                      <strong>Fokus:</strong> {step.focus}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {callToAction && (
          <div className="mt-16 text-center">
            <div className="bg-brand-primary text-white rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                {callToAction.title}
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {callToAction.description}
              </p>
              <button className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {callToAction.buttonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Template Features/Benefits Section
interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    benefits: string[];
  }>;
  backgroundImage?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  subtitle,
  features,
  backgroundImage
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${backgroundImage}')`
          }}
        />
      )}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/95 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm h-full">
              <div className="text-center p-8 h-full flex flex-col">
                <div className="mx-auto mb-4 p-3 bg-brand-secondary/10 rounded-full w-fit group-hover:bg-brand-secondary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
