﻿using System;
using System.Collections.Generic;

namespace ReactCrud.Server;

public partial class Contacto
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Correo { get; set; }

    public string? Telefono { get; set; }
}
