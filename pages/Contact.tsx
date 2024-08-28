import React, { useState } from "react";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Particle from "@/Components/Particle";

const Contact = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="flex min-h-screen w-full flex-wrap items-center justify-center bg-[url('/images/dvn6.jpg')] bg-cover bg-center bg-no-repeat pt-20"> {/* Added pt-20 for spacing */}
      <Particle />
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />

      <div className="w-full rounded-xl p-12 shadow-2xl shadow-blue-200 mx-auto md:w-8/12 lg:w-5/12 bg-white mt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-9">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-zinc-700">
                Prof. Nilmini Liyanage
              </h2>
              <p className="mt-2 text-l font-semibold text-zinc-700">
                Dean of the Faculty
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-8 text-center items-center lg:text-left">
              <div>
                <p className="font-bold text-zinc-700">Email</p>
              </div>

              <div>
                <p className="text-m font-semibold text-zinc-700">
                  Dean@fot.sjp.ac.lk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-xl p-12 shadow-2xl mx-auto shadow-blue-200 md:w-8/12 lg:w-5/12 bg-white mt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-9">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-zinc-700">Dilki Chamika</h2>
              <p className="mt-2 text-l font-semibold text-zinc-700">
                Student Coordinator
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-8 text-center items-center lg:text-left">
              <div>
                <p className="font-bold text-zinc-700">Email</p>
              </div>

              <div>
                <p className="text-m font-semibold text-zinc-700">
                  IamDilkayyy@fot.sjp.ac.lk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-xl p-12 shadow-2xl mx-auto shadow-blue-200 md:w-8/12 lg:w-5/12 bg-white mt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-9">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-zinc-700">DR</h2>
              <p className="mt-2 text-l font-semibold text-zinc-700">
                Deputy Registrar
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-8 text-center items-center lg:text-left">
              <div>
                <p className="font-bold text-zinc-700">Email</p>
              </div>

              <div>
                <p className="text-m font-semibold text-zinc-700">
                  DR@fot.sjp.ac.lk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-xl p-12 shadow-2xl mx-auto shadow-blue-200 md:w-8/12 lg:w-5/12 bg-white mt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-9">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-zinc-700">
                Another Contact
              </h2>
              <p className="mt-2 text-l font-semibold text-zinc-700">
                Whatever
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-8 text-center items-center lg:text-left">
              <div>
                <p className="font-bold text-zinc-700">Email</p>
              </div>

              <div>
                <p className="text-m font-semibold text-zinc-700">
                  sirimath@fot.sjp.ac.lk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
