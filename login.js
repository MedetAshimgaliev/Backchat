var space = {
  get: function(key){
    return JSON.parse(localStorage.getItem(key));
  },

  set: function(key, val){
    var tmp = JSON.stringify(val);
    localStorage.setItem(key, tmp);
  },

  remove: function(key){
    localStorage.removeItem(key);
  },

  clear: function(){
    localStorage.clear();
  }
};

$(document).ready(function() {

  $('.login-user').on('click', function() {
    var accountName = $('.login-input').val();
    console.log("account " + accountName);

    $('.login-input').val('');

    space.set('myAccount', accountName);

    // alert('all things are good!');
    window.location='file:///home/medet/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/web_technologies-master/user%20backbone%20chat/userList.html';
  })
})
