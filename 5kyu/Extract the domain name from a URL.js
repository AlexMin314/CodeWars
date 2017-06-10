// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript


function domainName(url){
  if (url.search(/\/{2}/g) > -1) url = url.slice(url.search(/\/{2}/)+2);

  if (url.search(/w{3}\./g) > -1) url = url.slice(url.search(/w{3}\./)+4);

  if (url.search(/\./) > url.search(/\//) && url.search(/\//) > 0) {
    return url.slice(0,url.search(/\//));
  }

  return url.slice(0,url.search(/\./));
}

console.log(domainName("google.com."));
