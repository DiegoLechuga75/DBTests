const { resolveInclude } = require('ejs');
const express = require('express');

const mostrarHoteles = async (req,res) => {
    const hoteles = await Hotel.findAll({
    include: {
        model: Gerente
    },
    raw: true,
    nest: true,
    })
    res.render('hotel/consultaHotel', {
        pagina: "Lista Hoteles",
        hoteles: hoteles
    });
}

module.exports = mostrarHoteles;