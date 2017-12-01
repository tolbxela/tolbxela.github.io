  // Email obfuscator script 2.1 by Tim Williams, University of Arizona
  // Random encryption key feature coded by Andrew Moulden
  // This code is freeware provided these four comment lines remain intact
  // A wizard to generate this code is at http://www.jottings.com/obfuscator/
  function Email() {
    coded = "ISXUY@dOGyagGI.ROX"
    key = "wxdobUns5G6hcevL42maSOykYEFr3JRgNzZuXIH7B1QWMPtpCiqTAlK89VDfj0"
    shift = coded.length
    link = ""
    for (i = 0; i < coded.length; i++) {
      if (key.indexOf(coded.charAt(i)) == -1) {
        ltr = coded.charAt(i)
        link += (ltr)
      } else {
        ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
        link += (key.charAt(ltr))
      }
    }
    if (document.getElementById("myhem")) {
      document.getElementById("myhem").innerHTML = "<a href='mailto:" + link + "' title='" + link + "'><i class=\"icon icon-mail\"></i> <span class=\"label\">Email</span></a>";
    }    
  }