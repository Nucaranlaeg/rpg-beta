function clean(node){
  for (let n = 0; n < node.childNodes.length; n ++) {
    let child = node.childNodes[n];
    if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))){
      node.removeChild(child);
      n --;
    } else if (child.nodeType === 1){
      clean(child);
    }
  }
}

setTimeout(() => {
	clean(document.body);
	const char = JSON.parse((new URLSearchParams(window.location.search)).get("char"));
	document.querySelector("#name").innerHTML = char.name;
	document.querySelector("#str").innerHTML = char.stats.STR.total;
	document.querySelector("#str-mod").innerHTML = char.stats.STR.mod > 0 ? `+${char.stats.STR.mod}` : char.stats.STR.mod;
	document.querySelector("#str-save").innerHTML = char.stats.STR.save > 0 ? `+${char.stats.STR.save}` : char.stats.STR.save;
	document.querySelector("#dex").innerHTML = char.stats.DEX.total;
	document.querySelector("#dex-mod").innerHTML = char.stats.DEX.mod > 0 ? `+${char.stats.DEX.mod}` : char.stats.DEX.mod;
	document.querySelector("#dex-save").innerHTML = char.stats.DEX.save > 0 ? `+${char.stats.DEX.save}` : char.stats.DEX.save;
	document.querySelector("#con").innerHTML = char.stats.CON.total;
	document.querySelector("#con-mod").innerHTML = char.stats.CON.mod > 0 ? `+${char.stats.CON.mod}` : char.stats.CON.mod;
	document.querySelector("#con-save").innerHTML = char.stats.CON.save > 0 ? `+${char.stats.CON.save}` : char.stats.CON.save;
	document.querySelector("#cha").innerHTML = char.stats.CHA.total;
	document.querySelector("#cha-mod").innerHTML = char.stats.CHA.mod > 0 ? `+${char.stats.CHA.mod}` : char.stats.CHA.mod;
	document.querySelector("#cha-save").innerHTML = char.stats.CHA.save > 0 ? `+${char.stats.CHA.save}` : char.stats.CHA.save;
	document.querySelector("#int").innerHTML = char.stats.INT.total;
	document.querySelector("#int-mod").innerHTML = char.stats.INT.mod > 0 ? `+${char.stats.INT.mod}` : char.stats.INT.mod;
	document.querySelector("#int-save").innerHTML = char.stats.INT.save > 0 ? `+${char.stats.INT.save}` : char.stats.INT.save;
	document.querySelector("#wis").innerHTML = char.stats.WIS.total;
	document.querySelector("#wis-mod").innerHTML = char.stats.WIS.mod > 0 ? `+${char.stats.WIS.mod}` : char.stats.WIS.mod;
	document.querySelector("#wis-save").innerHTML = char.stats.WIS.save > 0 ? `+${char.stats.WIS.save}` : char.stats.WIS.save;
});
