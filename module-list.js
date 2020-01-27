(function(){
    var modules={
        "panel-main-hdeeg":    			{url:"$H/m/panel-main.html",router:1},
        "panel-child-hdeeg":    			{url:"$H/m/panel-child.html"},
        
        "participant-data":   		{url:"$H/m/participant/participant-data.html",Table:"hdeeg-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-hdeeg",
                                            questionnaire_setup:"online-questionnaire-setup-hdeeg",
                                            online_questionnaire:"online-questionnaire-app-hdeeg",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$H/m/participant/participant-form.html",Table:"hdeeg-participant"},

        "online-questionnaire-setup-hdeeg": {url:"$H/m/oq-setup.html",Table:"hdeeg-participant"},
        "online-questionnaire-app-hdeeg":   {url:"$H/oq.html"},

        "notes":  		  	  			{url:"$H/m/library/notes.html"},
        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"hdeeg-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"hdeeg-notes"},

        "hdeeg-evening-finger-tapping-data":	        {url:"$H/m/neurocog/finger-tapping12-before-data.html",Table:"hdeeg-evening-finger-tapping",form_module:"hdeeg-evening-finger-tapping-form"},
        "hdeeg-evening-finger-tapping-form":	        {url:"$H/m/neurocog/finger-tapping12-alt-before-form.html",Table:"hdeeg-evening-finger-tapping",task_name:"Finger Tapping"},
        "hdeeg-morning-finger-tapping-data":	        {url:"$H/m/neurocog/finger-tapping6-after-data.html",Table:"hdeeg-morning-finger-tapping",form_module:"hdeeg-morning-finger-tapping-form"},
        "hdeeg-morning-finger-tapping-form":	        {url:"$H/m/neurocog/finger-tapping6-alt-after-form.html",Table:"hdeeg-morning-finger-tapping",Table2:"hdeeg-evening-finger-tapping",task_name:"Finger Tapping"},

   }
   for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
