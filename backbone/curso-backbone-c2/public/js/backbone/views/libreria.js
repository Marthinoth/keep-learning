var Libreria = Backbone.View.extend({

    el: '#app',

    initialize: function () {
        appLibros.on('add', this.mostrarLibro);

        appLibros.fetch();
    },

    mostrarLibro: function (modelo) {
        var newVista = new MostrarLibroView({model: modelo});
        $('.libros').append(newVista.render().$el);
    }
    /*
    el: ".vista",

    events: {
        'click .cambiar-color': 'cambiarColor'
    },

    cambiarColor: function () {
        this.$el.css('color', 'red');
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html('<div class="cambiar-color">Cambiar color del texto</div>');
    }*/
});

var MostrarLibroView = Backbone.View.extend({
    template: _.template( $('#tplMostrarLibro').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var appView = new Libreria();