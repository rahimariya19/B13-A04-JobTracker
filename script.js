let activeTab = "all";

let jobs = [
  {id:1, company:"Mobile First Corp", position:"React Native Developer", meta:"Remote · Full-time · $130,000 - $175,000", desc:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"all"},

  {id:2, company:"WebFlow Agency", position:"Web Designer & Developer", meta:"Los Angeles, CA · Part-time · $80,000 - $120,000", desc:"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status:"all"},

  {id:3, company:"DataViz Solutions", position:"Data Visualization Specialist", meta:"Boston,MA · Full-time · $125,000 - $165,000", desc:"Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status:"all"},

  {id:4, company:"CloudFirst Inc", position:"Backend Developer", meta:"Seattle, W/A · Full-time · $140,000 - $190,000", desc:"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.", status:"all"},

  {id:5, company:"Innovation Labs", position:"UI/UX Engineer", meta:"Austin,TX · Full-time · $110,000 - $150,000", desc:"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status:"all"},

  {id:6, company:"MegaCorp Solutions", position:"JavaScript Developer", meta:"New York, NY · Full-time · $130,000 - $170,000", desc:"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status:"all"},

  {id:7, company:"StartupXYZ", position:"Full Stack Engineer", meta:"Remote · Full-time · $120,000 - $160,000", desc:"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status:"all"},

  {id:8, company:"TechCorp Industries", position:"Senior Frontend Developer", meta:"San Francisco, CA· Full-time · $130,000 - $175,000", desc:"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status:"all"}
];





// button function 


function updateActiveTab() {
  document.getElementById("tab-all").classList.remove("bg-[#3B82F6]", "text-white");
  document.getElementById("tab-interview").classList.remove("bg-[#3B82F6]", "text-white");
  document.getElementById("tab-rejected").classList.remove("bg-[#3B82F6]", "text-white");
  // document.getElementById("tab-" + activeTab).classList.add("bg-[#002C5C]", "text-white");
  document.getElementById("tab-" + activeTab).classList.add("bg-[#3B82F6]", "text-white");
}

function btnTab(tab){
  activeTab=tab;
  updateActiveTab();
  jobTracker();

}











function setStatus(id, status){
  for(let job of jobs){
    if(job.id === id){
      job.status = status;
    }
  }
  activeTab = status;
  jobTracker();
}

function deleteJob(id){
  jobs = jobs.filter(job => job.id !== id);
  jobTracker();
}

function jobTracker(){
  const container = document.getElementById("noJobContainer");
  container.innerHTML = "";

  let filtered = activeTab === "all" ? jobs : jobs.filter(i => i.status === activeTab);




  document.getElementById("totalCountNo").innerText = jobs.length;
  document.getElementById("interviewCountNo").innerText = jobs.filter(i => i.status==="interview").length;
  document.getElementById("rejectCountNo").innerText = jobs.filter(i => i.status==="rejected").length;
  document.getElementById("tabNo").innerText = filtered.length + " jobs";





  if(filtered.length === 0){
    document.getElementById("emptyState").classList.remove("hidden");
    return;
  }
  document.getElementById("emptyState").classList.add("hidden");

  for(let job of filtered){
    container.innerHTML += `
      <div class="bg-white border-none  rounded-lg p-3 mb-4">
        <div class="flex justify-between">
          <h3 class="text-4xl mb-2 font-semibold text-[#002C5C]">${job.company}</h3>
          <button onclick="deleteJob(${job.id})" class="text-gray-400">✕</button>
        </div>
        <p class="mb-2 text-sm text-[#68778E]">${job.position}</p>
        <p class="text-sm text-[#68778E]">${job.meta}</p>
        

        <span class="mb-3 mt-3 inline-block text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 rounded bg-slate-200 text-[#002C5C]">NOT APPLIED</span>


        <p class="text-xl text-[#3A4350] leading-relaxed mb-4">${job.desc}</p>
        <div class="flex gap-2 mt-4">
          <button onclick="setStatus(${job.id}, 'interview')" class="border border-green-500 text-green-600 text-xs px-3 py-1 rounded">INTERVIEW</button>
          <button onclick="setStatus(${job.id}, 'rejected')" class="border border-red-500 text-red-500 text-xs px-3 py-1 rounded">REJECTED</button>
        </div>
        
      </div>
    `;
  }
}


jobTracker();
updateActiveTab();