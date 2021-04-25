using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAtividadeEntrevista.Models
{
    public class BeneficiarioModel
    {
        public long Id { get; set; }

        /// <summary>
        /// CPF
        /// </summary>
        
        public string CPF { get; set; }

        /// <summary>
        /// Nome
        /// </summary>
       
        public string Nome { get; set; }

        /// <summary>
        /// IdClient
        /// </summary>
        public long IdCliente { get; set; }

    }
}