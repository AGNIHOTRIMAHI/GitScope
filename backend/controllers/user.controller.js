//import dotenv from 'dotenv';
export const getUserProfileAndRepos=async(req,res)=>{
    const {username}=req.params;
    console.log(" GITHUB_API_KEY:", process.env.GITHUB_API_KEY);
    try{
        const userRes = await fetch(`https://api.github.com/users/${username}`,{
            headers:{
                authorization:`token ${process.env.GITHUB_API_KEY}`,
            }, 
        });
        

        console.log("GitHub Rate Limit Info:");
		console.log("Limit:", userRes.headers.get("X-RateLimit-Limit"));
		console.log("Remaining:", userRes.headers.get("X-RateLimit-Remaining"));
		console.log("Resets at (UTC):", new Date(userRes.headers.get("X-RateLimit-Reset") * 1000).toUTCString());

        const userProfile=await userRes.json();
        console.log(userProfile);
        const repoRes=await fetch(userProfile.repos_url,{
            headers:{
                authorization:`token ${process.env.GITHUB_API_KEY}`,
            },
        });
        const repos=await repoRes.json();
    
        res.status(200).json({userProfile,repos});

    }catch(error){
       res.status(500).json({error:error.message});
    }
}