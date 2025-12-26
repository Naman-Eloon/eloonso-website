const supabase = supabase.createClient(
  "https://xuippgenqrbebcvjobmp.supabase.co",
  "sb_publishable_rhXugubfVSacKLxFeUQ6yQ__tlrkSHn"
);

/* Check login */
async function checkAuth(){
  const { data:{ user } } = await supabase.auth.getUser();

  if(user){
    const btn = document.querySelector(".sign-btn");
    if(btn){
      btn.innerText = "Profile";
      btn.onclick = () => location.href="profile.html";
    }
  }
}

checkAuth();

/* Logout helper */
async function logout(){
  await supabase.auth.signOut();
  location.href = "index.html";
}
