using FI.AtividadeEntrevista.BLL;
using WebAtividadeEntrevista.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FI.AtividadeEntrevista.DML;

namespace WebAtividadeEntrevista.Controllers
{
    public class BeneficiarioController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Incluir()
        {
            return View();
        }

        [HttpPost]
        //adicionar um novo beneficiario
        public JsonResult Incluir(BeneficiarioModel model)
        {
            BoBeneficiario bo = new BoBeneficiario();

            if (!this.ModelState.IsValid)
            {
                List<string> erros = (from item in ModelState.Values
                                      from error in item.Errors
                                      select error.ErrorMessage).ToList();

                Response.StatusCode = 400;
                return Json(string.Join(Environment.NewLine, erros));
            }
            else
            {
                if (model.Nome == null && model.CPF == null)
                {
                    return Json("Cadastro efetuado com sucesso");
                }
                else
                {
                    if (bo.VerificarExistencia(model.CPF) == false)
                    {
                        model.Id = bo.Incluir(new Beneficiario()
                        {
                            CPF = model.CPF,
                            Nome = model.Nome,
                            IdCliente = model.IdCliente
                        });


                        return Json("Cadastro efetuado com sucesso");
                    }
                    else
                    {
                        return Json("Esse CPF já está cadastrado");
                    }
                }

            }
        }

        [HttpPost]
        //editar um beneficiario
        public JsonResult Alterar(BeneficiarioModel model)
        {
            BoBeneficiario bo = new BoBeneficiario();

            if (!this.ModelState.IsValid)
            {
                List<string> erros = (from item in ModelState.Values
                                      from error in item.Errors
                                      select error.ErrorMessage).ToList();

                Response.StatusCode = 400;
                return Json(string.Join(Environment.NewLine, erros));
            }
            else
            {
                if (model.Nome == null && model.CPF == null)
                {
                    return Json("Cadastro efetuado com sucesso");
                }
                else
                {
                    bo.Alterar(new Beneficiario()
                    {
                        CPF = model.CPF,
                        Nome = model.Nome,
                        IdCliente = model.IdCliente
                    });

                    return Json("Cadastro alterado com sucesso");
                }
            }
        }

        [HttpGet]
        //abre modal do beneficiario
        public ActionResult Alterar(long id)
        {
            BoBeneficiario bo = new BoBeneficiario();
            Beneficiario beneficiario = bo.Consultar(id);
            Models.BeneficiarioModel model = null;

            if (beneficiario != null)
            {
                model = new BeneficiarioModel()
                {
                    Id = beneficiario.Id,
                    CPF = beneficiario.CPF,
                    Nome = beneficiario.Nome,
                    IdCliente = beneficiario.IdCliente
                };


            }

            return View(model);
        }

        [HttpGet]
        //remove beneficiario pelo id
        public JsonResult Excluir(long id)
        {
            try
            {
                BoBeneficiario bo = new BoBeneficiario();
                bo.Excluir(id);

                return Json("Beneficiário excluido com sucesso!");

            }

            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message});
            }

        }

    }
}