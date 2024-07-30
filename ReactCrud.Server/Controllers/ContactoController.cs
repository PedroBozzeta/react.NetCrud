using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactCrud.Server.Models;

namespace ReactCrud.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactoController : ControllerBase
    {
        private readonly PruebaContext _context;
        public ContactoController(PruebaContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Contacto> contactos = await _context.Contactos.OrderByDescending(x => x.Id).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, contactos);
        }
        [HttpPost]
        [Route("Crear")]
        public async Task<IActionResult> Crear([FromBody] Contacto request)
        {
            _context.Contactos.Add(request);
            await _context.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Contacto request)
        {
            _context.Contactos.Update(request);
            await _context.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }
        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Contacto contactoId = await _context.Contactos.FirstOrDefaultAsync(x => x.Id == id);

            _context.Contactos.Remove(contactoId);
            await _context.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
