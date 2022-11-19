import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)
    const { data } = await client.from("testimonials").select("profile, fullName, recommendation, relationship, status, linkedin").order('order',{ascending: true});
    return { testimonials: data };
});


// export default defineEventHandler(() => [{
//     profile: "/img/oussama-rahmouni.webp",
//     fullName: "oussama RAHMOUNI",
//     recommendation: `Any organization would be lucky to have Mohamed EL YONOUSI as programmer.<br/>
//         I was consistently impressed by his essential programmer skills, his dedication, and good humor.<br/>
//         He is a hard worker and talented young man,
//         and it was indeed a delight to teach for him and
//         for his colleagues.<br/>
//         I am certain that Mohamed EL YONOUSI is going to continue to do great and creative things in his future.<br/>
//         I recommend Mohamed EL YONOUSI for the position of full stack developer.
//         `,
//     relationship: "teacher",
//     status: 'Information Systems Engineering',
//     linkedin: 'https://www.linkedin.com/in/oussama-rahmouni-bb034624',
// },
// {
//     profile: "/img/yamin-mechqi.webp",
//     fullName: "Yamin MECHQI",
//     recommendation: `Good mastery, creativity and discipline.
//         All the best Mohammad`,
//     relationship: "teacher",
//     status: 'Senior Software Engineer at Tanger Med Compte officiel - TMSA',
//     linkedin: 'https://www.linkedin.com/in/yamin-mechqi',
// },
// {
//     profile: "/img/van-acker.webp",
//     fullName: "Nicolas VAN ACKER",
//     recommendation: `The Donatelife project as part of the City'zen challenge was carried out With great rigor and a very strong investment by Mohamed.`,
//     relationship: "Mentor",
//     status: 'Director of Small and Medium Account Customer Services | Berger Levrault',
//     linkedin: 'https://www.linkedin.com/in/nicolas-van-acker-0a0316105',
// },
// {
//     profile: "/img/karima-el-khayati.webp",
//     fullName: "Karima EL KHAYATI",
//     recommendation: `It was a pleasure to work with Mohamed on the same team. I was always impressed by his ability to find solutions in a short time, his curiosity for learning new skills, and his discipline and creativity.
//         I highly recommend his skills.`,
//     relationship: "Colleague",
//     status: 'Junior developer at NTT DATA',
//     linkedin: 'https://www.linkedin.com/in/karima-el-khayati',
// },
// {
//     profile: "/img/mounia-belhaj.webp",
//     fullName: "Mounia BELHAJ",
//     recommendation: `Mohamed El YONOUSI, we were colleagues at ISMO for 2 years, we worked together on many projects that I can say Mohamed is a great teammate, he helped me to understand many things in the IT world as well as he's a serious, curious, hardworking man. It was a pleasure to work with you, Mohamed`,
//     relationship: "Colleague",
//     status: 'SISnet Java Developer at NTT DATA',
//     linkedin: 'https://www.linkedin.com/in/mouniabelhaj1',
// },
// {
//     profile: "/img/youssef-hammouda.webp",
//     fullName: "Youssef HAMMOUDA",
//     recommendation: `The best UI designer I've met, professional and flexible, it was an honor working with you in the same team.`,
//     relationship: "Colleague",
//     status: 'CityZen challenge 5 : 2nd prize winners 🥈',
//     linkedin: 'https://www.linkedin.com/in/youssef-hammouda',
// },
// {
//     profile: "/img/adnane-el-biat.webp",
//     fullName: "Adnane EL BIAT",
//     recommendation: `It was such a pleasure to take a few classes with you. he was always accommodating, kind, and motivated, and he is very applied and aims for high-quality work.`,
//     relationship: "Colleague",
//     status: 'Full Stack Developer',
//     linkedin: 'https://www.linkedin.com/in/elbiat-adnane-0a18a91a2',
// },
// {
//     profile: "/img/zayd-el-imrani.webp",
//     fullName: "Zayd EL Imrani",
//     recommendation: `I had fun working with you as a team specially while implementing clean code and best practices, we had a lot of experience together, I would say I haven't saw someone orginaze his code like you in my entire life.
//         I am grateful that I had worked with you.`,
//     relationship: "Colleague",
//     status: 'Fullstack developer ( C# | .NET Core | Angular ) at NTT DATA',
//     linkedin: 'https://www.linkedin.com/in/zaydimr'
// },
// ]);