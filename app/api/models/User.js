/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id:{
  	  type:'integer',
  	  primaryKey: true,
  	  autoIncrement: true
  	},
  	firstname: {
      type: 'string',
      required:true,
      size:50
    },
    secondname: {
      type: 'string',
      defaultsTo: '',
      size:50
    },
    lastname: {
      type: 'string',
      required:true,
      size:50
    },
    secondlastname: {
    	type:'string',
      defaultsTo: '',
		  size:50
    },
    email:{
    	type:'email',
    	required:true,
    	unique: true,
    	size:80
    },
    username: {
	    type: 'string',
	    required:true,
	    unique: true,
	    size:50
  	},
    pass: {
      type: 'string',
      required:true,
      size:30
    },
    status: {
      type:'boolean',
      defaultsTo: true,
    },
    phone: {
      type: 'string',
      size:30
    },
    mobilephone:{
      type: 'string',
      size:30
    }
  }
  
  
};

