import{a5 as i,h as y,j as x,k as o,a7 as h,a0 as l,a1 as a,an as b,ao as m,g as v,ap as A,aq as k,ar as _}from"./vendor.ffe9a40f.js";import{_ as V,f as U,c as C,e as j,b as M}from"./index.20328d54.js";const T={contentType:"image/jpeg"},P={components:{},setup(){const s=i([]);let e=i(null);const n=i({nombre:"",apellido:"",cedula:"",instrumento:"",direccion:"",grupo:"",telefono:"",edad:"",sexo:"",nacimiento:"",madre:"",madreCedula:"",direccionTrabajoMadre:"",padre:"",padreCedula:"",direccionTrabajoPadre:"",foto:null,id:Date.now().toString(),representante:""}),t=r=>{e=r.target.files[0];const g=v(U),f=A(g,"fotos/"+e.name),c=k(f,e,T);c.on("state_changed",d=>{const w=d.bytesTransferred/d.totalBytes*100;switch(console.log("Proceso de la carga "+w+"% "),d.state){case"paused":console.log("Carga pausada");break;case"running":console.log("Carga Completa");break}},d=>{switch(d.code){}},()=>{_(c.snapshot.ref).then(d=>{console.log("URL de descarga: "+d),n.foto=d})})},u=()=>{n.nombre="",n.apellido="",n.direccion="",n.grupo="",n.telefono="",n.instrumento="",n.edad="",n.sexo="",n.nacimiento="",n.madre="",n.madreCedula="",n.direccionTrabajoMadre="",n.padre="",n.padreCedula="",n.direccionTrabajoPadre="",n.foto=null,n.representante=""};return{items:s,newAlumno:n,validar:async()=>{try{C(n)?await j(n)?await M(n)?u():alert("Error al guardar"):alert("Alumno duplicado"):alert("Campos vacios")}catch(r){alert("Ya existe un alumno con ese nombre"),alert(r)}},archivo:t}}},D={class:"mt-4"},R={class:"block py-6 px-2 rounded-lg shadow-xl bg-blue-100 w-full mb-7"},S=o("h2",{class:"text-2xl"},"Registrar Alumno",-1),B={class:"grid grid-cols-2 gap-4"},N={class:"form-group p-3"},E={class:"form-group p-3"},q={class:"flex justify-between rounded-md"},F={class:"form-group p-3"},G={class:"form-group p-3"},I={class:"form-group mb-6"},L={class:"form-group mb-6 grid grid-cols-3 gap-2"},O=o("option",{disabled:"",value:""},"Grupo",-1),Q=o("option",null,"Solfeo",-1),Y=o("option",null,"Coro",-1),z=o("option",null,"Orquesta",-1),H=[O,Q,Y,z],J=o("option",{disabled:"",value:""},"Sexo",-1),K=o("option",null,"Masculino",-1),W=o("option",null,"Femenino",-1),X=[J,K,W],Z={class:"grid grid-cols-2 gap-3"},$={class:"form-group mb-6"},oo={class:"form-group mb-6"},eo=o("span",null,"Quien ser\xE1 el representante?",-1),ro={class:"grid grid-cols-2 gap-3 my-6"},to={class:"form-check"},no=o("label",{class:"form-check-label inline-block text-gray-800",for:"madre"}," Madre ",-1),lo={class:"form-check"},ao=o("label",{class:"form-check-label inline-block text-gray-800",for:"padre"}," Padre ",-1),io={class:"form-control mb-6"},so=o("button",{type:"submit",class:"w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},[o("span",{class:"material-symbols-outlined"}," save ")],-1);function uo(s,e,n,t,u,p){return y(),x("section",D,[o("div",R,[o("form",{onSubmit:e[19]||(e[19]=h(r=>t.validar(),["prevent"])),enctype:"multipart/form-data"},[S,o("div",B,[o("div",N,[l(o("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>t.newAlumno.nombre=r),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"nombre",placeholder:"Nombre"},null,512),[[a,t.newAlumno.nombre,void 0,{trim:!0}]])]),o("div",E,[l(o("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>t.newAlumno.apellido=r),type:"text",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"apellidos","aria-describedby":"apellido",placeholder:"Apellidos"},null,512),[[a,t.newAlumno.apellido,void 0,{trim:!0}]])])]),o("div",q,[o("div",F,[l(o("input",{"onUpdate:modelValue":e[2]||(e[2]=r=>t.newAlumno.cedula=r),type:"text",class:"form-control block w-64 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"cedula",placeholder:"Cedula del Alumno"},null,512),[[a,t.newAlumno.cedula,void 0,{trim:!0}]])]),o("div",G,[l(o("input",{"onUpdate:modelValue":e[3]||(e[3]=r=>t.newAlumno.instrumento=r),type:"text",class:"form-control block w-64 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"cedula",placeholder:"Instrumentos Preferido"},null,512),[[a,t.newAlumno.instrumento,void 0,{trim:!0}]])])]),o("div",I,[l(o("textarea",{rows:"4",cols:"50","onUpdate:modelValue":e[4]||(e[4]=r=>t.newAlumno.direccion=r),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Direccion"},null,512),[[a,t.newAlumno.direccion,void 0,{trim:!0}]])]),o("div",L,[l(o("select",{"onUpdate:modelValue":e[5]||(e[5]=r=>t.newAlumno.grupo=r),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"},H,512),[[b,t.newAlumno.grupo]]),l(o("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=r=>t.newAlumno.telefono=r),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Telefono"},null,512),[[a,t.newAlumno.telefono,void 0,{trim:!0}]]),l(o("input",{type:"text","onUpdate:modelValue":e[7]||(e[7]=r=>t.newAlumno.edad=r),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Edad"},null,512),[[a,t.newAlumno.edad,void 0,{trim:!0}]]),l(o("select",{"onUpdate:modelValue":e[8]||(e[8]=r=>t.newAlumno.sexo=r),class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"},X,512),[[b,t.newAlumno.sexo]]),l(o("input",{type:"date","onUpdate:modelValue":e[9]||(e[9]=r=>t.newAlumno.nacimiento=r),class:"form-control col-span-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"F. Nacimiento"},null,512),[[a,t.newAlumno.nacimiento,void 0,{trim:!0}]])]),o("div",Z,[o("div",$,[l(o("input",{type:"text","onUpdate:modelValue":e[10]||(e[10]=r=>t.newAlumno.madre=r),class:"form-control my-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Nombre de la Madre"},null,512),[[a,t.newAlumno.madre,void 0,{trim:!0}]]),l(o("input",{type:"text","onUpdate:modelValue":e[11]||(e[11]=r=>t.newAlumno.madreCedula=r),class:"form-control my-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Cedula de la Madre"},null,512),[[a,t.newAlumno.madreCedula,void 0,{trim:!0}]]),l(o("input",{type:"text","onUpdate:modelValue":e[12]||(e[12]=r=>t.newAlumno.direccionTrabajoMadre=r),class:"form-control block my-2 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Direccion del trabajo de la Madre"},null,512),[[a,t.newAlumno.direccionTrabajoMadre,void 0,{trim:!0}]])]),o("div",oo,[l(o("input",{type:"text","onUpdate:modelValue":e[13]||(e[13]=r=>t.newAlumno.padre=r),class:"form-control my-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"Padre",placeholder:"Nombre de Padre"},null,512),[[a,t.newAlumno.padre,void 0,{trim:!0}]]),l(o("input",{type:"text","onUpdate:modelValue":e[14]||(e[14]=r=>t.newAlumno.padreCedula=r),class:"form-control my-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Cedula del Padre"},null,512),[[a,t.newAlumno.padreCedula,void 0,{trim:!0}]]),l(o("input",{"onUpdate:modelValue":e[15]||(e[15]=r=>t.newAlumno.direccionTrabajoPadre=r),type:"text",class:"form-control my-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Direccion del trabajo de la Padre"},null,512),[[a,t.newAlumno.direccionTrabajoPadre,void 0,{trim:!0}]])])]),eo,o("div",ro,[o("div",to,[l(o("input",{"onUpdate:modelValue":e[16]||(e[16]=r=>t.newAlumno.representante=r),class:"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"radio",name:"madre",value:"madre"},null,512),[[m,t.newAlumno.representante]]),no]),o("div",lo,[l(o("input",{"onUpdate:modelValue":e[17]||(e[17]=r=>t.newAlumno.representante=r),class:"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"radio",name:"padre",value:"padre"},null,512),[[m,t.newAlumno.representante]]),ao])]),o("div",io,[o("input",{class:"bg-red-300",type:"file",onChange:e[18]||(e[18]=r=>t.archivo(r))},null,32)]),so],32)])])}var mo=V(P,[["render",uo]]);export{mo as default};
