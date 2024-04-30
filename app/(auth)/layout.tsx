const AuthLayout = ({children} : {children: React.ReactNode} ) => {
    const parentContainerStyle = {
        height: "100vh" // 100% of the viewport height
      };    

    return (  
    <div className="parent-container">
        <div className="bg-yellow-500 h-full">
            {children}
        </div>
    </div>
    );
}
 
export default AuthLayout;