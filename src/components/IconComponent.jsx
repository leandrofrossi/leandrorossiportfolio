import React from 'react';

const IconComponent = ({ icon: Icon, className, title }) => {
  return (
    <div className="relative inline-block group">
      <Icon className={className} />
      {title && (
        <div className="tooltip absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 py-1 px-2 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title}
        </div>
      )}
    </div>
  );
};

export default IconComponent;
