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
  	nombres: {
      type: 'string',
      required:true,
      size:50
    },
    apellidoPaterno: {
    	type:'string',
    	required:true,
		size:50
    },
    apellidoMaterno:{
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
  	}
  }
  
  
};

