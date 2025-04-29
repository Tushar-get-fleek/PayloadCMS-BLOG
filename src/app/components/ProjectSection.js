const ProjectSection = () => {

    const projects = [
        {
            title: "Discover Subscriptions",
            tags: ["Explore Deals", "Subscription Hunt", "Find New Services"]
        },
        {
            title: "Redeem FleekCoin for Subscription",
            tags: ["Earn Rewards", "Crypto Redemption", "Subscription with FleekCoin"]
        },
        {
            title: "Manage Subscriptions Seamlessly",
            tags: ["Organize Easily", "Track Subscriptions", "No Hassle"]
        },
        {
            title: "Share with Friends & Family",
            tags: ["Sharing", "Social", "Spread the Joy"]
        },
        {
            title: "Auto-Detect Subscriptions",
            tags: ["Smart Detection", "Automatic", "Easy Management"]
        },
        {
            title: "Hassle-Free Auto-Renewal",
            tags: ["Set & Forget", "Auto-Renew", "No Worries"]
        }
    ]
    
    return (
        <section id="projects" className=" px-4 py-32 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {projects.map((project , index)=>(
                    <div key={index} className = "bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-50 transition-all hover:shadow-sm">
                        <div className="flex flex-col h-full">
                       <h3 className="txt-lg font-semibold text-white mb-2">{project.title}</h3>
                       <div className="flex flex-wrap gap-1 mt-auto">
                        {project.tags.map((tag,index)=>{
                            return (<span
                            key={index}
                            className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20  text-purple-200 border border-purple-500/30">
                                {tag}
                            </span>
                            );
                        })}
                       </div>
                        </div>
                        </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;