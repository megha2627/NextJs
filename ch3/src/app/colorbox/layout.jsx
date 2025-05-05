export default function Layout({ children,left, right }) {
    return <div className="flex flex-row h-screen">
        <div className="w-1/4 bg-gray-200">
            {left}
        </div>
        <div className="w-1/2 bg-gray-300">
            {children}
        </div>
        <div className="w-1/4 bg-gray-400">
            {right}
        </div>
    </div>;
  
    return <div>{children}
   </div>;
}