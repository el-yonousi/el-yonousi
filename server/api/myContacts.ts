import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)
    const { data } = await client.from("myContacts").select("title, icon, link, text");
    return { myContacts: data };
});


// export default defineEventHandler(() => [{
//     title: "phone",
//     icon: "material-symbols:phone-in-talk-watchface-indicator-outline",
//     link: "tel:212603476173",
//     text: "+212 60 347 6173",
// },
// {
//     title: "email",
//     icon: "ic:twotone-attach-email",
//     link: "mailto:elyonousimohamed@gmail.com",
//     text: "elyonousimohamed@gmail.com",
// },
// {
//     title: "address",
//     icon: "mdi:map-marker-radius-outline",
//     link: "",
//     text: "Bujarrah, Jabal Boiblan street, Tetouan, MA 93040",
// },
// {
//     title: "working hours",
//     icon: "tabler:clock-hour-9",
//     link: "",
//     text: "9:00 - 18:00",
// }
// ]);