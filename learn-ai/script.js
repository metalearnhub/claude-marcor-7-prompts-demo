function unlockAgent(){
  document.getElementById('leadFormWrap').style.display = 'none';
  document.getElementById('agentWrap').style.display = 'block';
}
function submitLeadForm(e){
  e.preventDefault();
  var name = document.getElementById('fld_name').value;
  var email = document.getElementById('fld_email').value;
  var phone = document.getElementById('fld_phone').value;
  var form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://studio.marcor.app/api/webhooks/flow/4341/ec486823226130f13ea22694c38fe72a0923d34521bafaed049d9842d9768bb9';
  form.target = 'hiddenSubmitFrame';
  form.style.display = 'none';
  function addField(n,v){ var i=document.createElement('input'); i.type='hidden'; i.name=n; i.value=v; form.appendChild(i); }
  addField('contactName', name);
  addField('contactEmail', email);
  addField('contactPhone', phone);
  document.body.appendChild(form);
  form.submit();
  setTimeout(function(){ document.body.removeChild(form); }, 1000);
  unlockAgent();
  return false;
}