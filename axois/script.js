const form = document.getElementById('form');

form.addEventListener('submit', async function(e) {
    e.preventDefault()
    
    const formData = new FormData(form);
    // console.log([...formData]);
    //POST aka Create


        const res = await axios.post('https://reqres.in/api/users', {...formData})
        console.log(res.data)
});

axios.get('https://reqres.in/api/users?page=2')
    .then(res => console.log(res.data.data))
    .catch(e => console.log(e))

    function handleData(data){
        console.log(data);
    }


    
    //PUT aka UPDATE

    // axios.put("https://reqres.in/api/users/201",{
    //     firstName: 'George',
    //     lastName: 'jetson'
    // })
    // .then(function(response){
    //     console.log(response);
    // })
    // .catch(function(response){
    //     console.log(response);
    // })

    // //DELETE USER
    // axios.delete("https://reqres.in/api/users/201")
    // .then(function(response){
    //     console.log(response);
    // })
    // .catch(function(response){
    //     console.log(response);
    // })

