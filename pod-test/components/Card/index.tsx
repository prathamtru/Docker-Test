export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`ui-bg-white ui-shadow-md ui-rounded-lg ui-overflow-hidden ${className}`}>
        {children}
      </div>
    );
  };
  
  export const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`ui-p-4 ui-border-b ${className}`}>
        {children}
      </div>
    );
  };
  
  export const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <h2 className={`ui-text-xl ui-font-semibold ui-text-gray-800 ${className}`}>
        {children}
      </h2>
    );
  };
  
  export const CardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <p className={`ui-text-sm ui-text-gray-600 ${className}`}>
        {children}
      </p>
    );
  };
  
  export const CardContent = ({ children, className="" }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`ui-p-4 ${className}`}>
        {children}
      </div>
    );
  };
  
  export const CardFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`ui-p-4 ui-border-t ${className}`}>
        {children}
      </div>
    );
  };
  