mergeInto(LibraryManager.library, {

	AddQuery: function (key, value) {

		key = Pointer_stringify(key);
		value = Pointer_stringify(value);
        console.log(key + "=" + value);

        key = encodeURIComponent(key);
		value = encodeURIComponent(value);

        console.log(key + "=" + value);

        let kvp = document.location.search.substr(1).split('&');
		
        if (kvp == '') {
            document.location.search = '?' + key + '=' + value;
        }
        else {
            let i = kvp.length;
			let x;
			
			while (i--) {
                x = kvp[i].split('=');

                if (x[0] == key) {
                    x[1] = value;
                    kvp[i] = x.join('=');
                    break;
                }
            }

            if (i < 0) { 
			kvp[kvp.length] = [key, value].join('=');
			}
			
            document.location.search = kvp.join('&');
        }
	},
});