!function(){
    var view = document.querySelector('section.Message')
    var controller = {
        view: null,
        messageList: null,
        init: function(view){
            this.view = view
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.initAV()
            this.loadMessage()
            this.bindEvents()
            this.saveMessage()
        },
        initAV: function(){
            var APP_ID = 'ABDAOVwEp0C3ObRC6sW978mt-gzGzoHsz';
            var APP_KEY = 'PPxUz7BbNiKKlhgh41udYFrb';
            AV.init({appId: APP_ID,appKey: APP_KEY});
        },
        loadMessage:function(){
            var query = new AV.Query('Message');
            query.find().then((messages) => {
                let array = messages.map((item)=>item.attributes)
                array.forEach((item)=>{
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}` 
                    this.messageList.appendChild(li)
                })
            })
        },
        bindEvents:function(){
            this.form.addEventListener('submit', function (e) {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            var Message = AV.Object.extend('Message');
            var message = new Message();
            message.save({
                'name': name,
                'content': content
            }).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}` 
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
            })
        }
    }   
    controller.init(view)
},call()


