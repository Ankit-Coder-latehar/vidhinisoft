import React from "react";

const testimonials = [
  {
    text: `For us the Vidhini Soft team has been a fundamental support and has added a lot of value by providing the service always in a timely and correct manner. The team has always understood the needs or requirements that we have had, providing the company with professionals with high skills and quality of work in order to cover a number of strategic positions that we have had.`,
    name: "Pamela Salinas",
    role: "Commercial Director",
    company: "at Daltum System LLC",
    avatar: "https://plus.unsplash.com/premium_photo-1661659479244-d4e71bb1f830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29ya2luZyUyMGdpcmwlMjBpbiUyMHNvZnR3YXJlfGVufDB8fDB8fHww",
  },
  {
    text: `In few days, Vidhini Soft was able to manage a hiring that we had been looking for months with other agencies. The closeness and empathy they showed from the first minute made us feel that we had an ally in this process, and so it was. That's why, whenever we can, we recommend Glofy because we know for sure that we will never be wrong. These are the customer experiences that inspire us to improve.`,
    name: "Diego García-Huidobro",
    role: "CEO",
    company: "at Billbox",
    avatar: "https://images.unsplash.com/photo-1544717305-f9c88f2897bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBnaXJsJTIwaW4lMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    text: `We're very comfortable working with VidhiniSoft since it supported us in increasing the placement of foreign talent in various positions. It was very pleasant and dynamic to work with the Glofy team throughout the process, they understood our need and also shared good practices to successfully carry out each of the contracts.`,
    name: "Edna González",
    role: "Human Capital Director",
    company: "at Definity First",
    avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUVEhYQEBAVFRUVDxUQFRUWFhYVFRUYHSggGBolGxYVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGi0dHSUrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLf/AABEIAQoAvgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEHAP/EAEEQAAEDAgMFBgMGBAMJAQAAAAEAAhEDBAUhMRJBUWFxBhMigZGhMrHBI2Jy0eHwFDNCUnOCshUWJDRjkpOi8Qf/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAhEQACAgMBAQEBAAMAAAAAAAAAAQIRAxIhMUETUQQiMv/aAAwDAQACEQMRAD8A8k2FW5yKqlCb1NGIuX1NuasIU6NEnOEQFk5KtSqKI0QoJTXQyOqNyQpaijFtBF7GSot2olzslmYHIUmMXWIljckGzFAe4ZbR6SVbY1CKjcz8QCi4KVi37Rv4gt8Mey4DSGyOi0rKIhIMAHhHRaUjJcqR0gNemOCV3dEJrWKBuQgzIxPaG1kHJef3tCCvTccGRXn+ItzKpiYmRClrVYAviFAPXSQI1V6r2JZNuw/dC8sqL1bsUIt2fgCjm8RXF6eZvpoLuzJT0Wb+C6zC3cEVNImKaVAkgc0e6lCOp4U/gr3YS8pXNGMzWZmeqhslaYYC5dHZ5xTfrExmS3JEV6VMMyzK0DuzjlA9nHLLLExm6bV1+i0Y7OPX3+7b0f1j/TUZiiSjBMJ/S7MuCNb2YyzSvLE1Mx6Kw5v2jPxBPavZgjQqVlgDg9p4OBR/WNempnp+AUsgtG6jkk+A0oAWieMlE6BHXYgbhuSc3DEtum5JWMjH46MivP8AEtSvRMdbkVkKuFl50VMbS9J5DJuKgAtNUwGNWrrMCbwVf0iRozFQwvXexrP+HZ+ALD3OBiNF6H2Wo7NFo4NClkmpVRTGui3/AGWOCsZhw4JyQvmMXJTK6C2nYDgr22Q4I5zIVJeg0DVFH8GOCk20CulTY1Y1FX8IFW63ARjygLglFIVqiPcAq5lqEPbUzMpkylktQUikWwVncBfGVMBCg0CPoBcp2okdUQ5inSZmEaDQ/wALbACdOGSVYeNE1LhCuvDANdqWXgyTas4JXeEQgNRksXGahY24O5fYw/NW4YclpeAS6WV7JvBCiyEpyQqjTUmBwTFtazEaJvg1KGxyVbmI/DmgBZcYygAsKsY5Asrrpr80LC2GVShYzXRUXzXhZsRlrApyoB4UHPSi2dc9QNOV80hWtITIBO3ohFhqHp1ArDWCYdHHMVVWo1glzgBxJhCYriopNy+I5NHPosZRfeXdUmmQGAkbbgHAkGDE/RPHHfoaNTW7R2wMbc9ASiLXGaDhIfAmJOQngeHmkFxgdYth7Kb+JGU/r0Sq2oPtiW1GnYcSyTn4YMA8YKssUBXsj1iyuQQCCCNxGYRr7rJePYLiz6LnBjjsbRETI1yMLfYNiYuKe1EOB2Xt4HWRyIIPmky45QVrqKYpRlx+jipcpdd3GS7UQN03Jc2zOjRGexW4lwTLC9AkuIM8SY4XVgKjfCMuMfqDiqe/CrdchTEsILldb1oS11yEfQZIWY8H0yTL7mpC/wCaQh5UmuKrqQs0QxHmvhiI4rPucVEOKGoLNKMSHFfHERxWcBK6JW1BZo24iOK6cTHFZ4AqJlFRRrNG3FOavo3pcYH7Cy7AU9w2lsU3vOsbI5SjqGNsXXJ7+52C6BEbU6CMz5CfOFucMoU2sDacQ3KBu6hYXBmObVqXApuqbJFJobszLjLneIgZDY91pcHxQV6pAZUY9o8W0OcRIkH1XTBcsqx3Ual93Ra4EETyK7iWKbB2Q3aI3DVBDFNr4mOZOQJiJ4SNE/AUzM45Yd3JY2AZiNxhMewN2Ns0yc3ZifujMe/svsYumlhBj81lLG92Lhj25CQOhk5+s+gWfYtE/JJnsjqKFuaQhE97l5IS6q5LzmdaZlsZaAl9rcxvRmNVJSNgKrBWiOV9HZvearN9zSxwKhsFUWOJByYzfejitlhRBYDyXnJplbrAqn2Y6IZIpLhTE3ZjG0FJtFQFyIXW3IU9WLaJuohRFJfOuAoC4RUWBtBHdBdbTCH/AIpdbcraSBaCTTQ72KRuVQ6smjjYGwy0YJk+Q4lNbw7NNjd7nifPNKrAy9o5yUyxR3iYOEP94+qOtFcfR92esg23Zlm4bburs/30RT6LaYLmtzgqx1wykxu1IAaAIBPDgkGIuFbKhX2PFtOAzLt5BnQdFfwqk30ErW9RzXPY9wcZMiMzumRnHDmlNr/EuDmVhu/maBw4kbj++Q1dBmwwAmTvKXYhdQICIDHdprsMcxs9QldEQTvAcIO+JBE88/ZS7RWnePfUcXAbJaIjZBAnxTrqPVUYeSaTnHdsD3H6LIlNHtFGSxp+6PkqLluSLs86bD9xp9gqrkLgcTp2MlijM0FQam+J00qBgp0uEZ+lzmhQDQoPrKnv1uk+BTmhaPDB4R0WU76VpsJqeHyQlZXHVmCD11rlRtKQcu/VHIEgqQCHa9WtejSAXBqkAqdtd21uGLSVDaUC5fMYSULRh/2eoztP5RKvxF32o/CB6kK/C2wwDgJMc0BiT4qOPBrT7g/Rc8nbOrGqRs7K4ZWoMex+TmAgjokWJYeS6TEzlUAAqDzGqwvZXFK9G4q27XTTL3Oaw6A7X9PBa2piNU6tVG0UxuVcD3VIGsrO43i9KkW944gOMZAkwM9B+80zYyrU5BZHtvh572kBo0EvcTAaCRm7rB9EYuxZ8F2K4p/EeCkC2mJLificTmZ5adYCY2tuO6qAbmMPo4H5LPmqACxm4GXaFzt5j5LYWFKWVB9wAf8AiaR7rPjJ+qz0fDf5NP8Aw2f6QuXIVWCvm3pH/pt9hCnXcuZ+lBHiKS1YTu/SaqxAVgdVUSi6lNDuYiIyVLVajCmnZWYpNzWrwp3hWY8DztgVoCCbWUxcLp3Oag0NClCDFyrBcIOQaCFIBC9+uisl3NQXCnQb4uuRQgrJlgVDvKgJ+Fvid9AtsFLpp7JkN6/v80pvfjeT/aE3pVNp/ID9Equ9X9Pqps64oylgdm/H3mk+fh/Vei0KQK87uaJ/jKZHAj5r0DDahgAqq8Rq9Da+zTYXHQes7oS6jgYrg1a7Z2s2s3Abst+S0FrYCpD35tHwN3Ej+o8UbVYAmjG3bFk+UeT9p+xT6c1bcFwHxUv6wPu8dBkrMArAjrSBPVoDSF6Y4hZPH8KbTqCtTECoSyqBptOGTvMgBPOHLRFS+Dvs7Jt2DhLT1DiETWplVdls6H+d3vmfmjrkLkl6VT4Ibumk9doBTq/cFnbh4nVJQGSLQqXsCiag4qipXHFZIWy9hErRYXOyslTrZraYO3wpmNE8lBX0qcKMKxAkCphyi0KUIMxIOVjHKoBSCUxbtLT4J4aBcNXu2Rx4LLtC1NE7NNjRuHusUxq2N8PbG0eSCuRmeefyhM6FJzaY2gQSEvuGZ/vmlZ0pdFAtZe1/9py/7pWpoMz8p80BZW8jz+pTu1o5qkfDS9HlGpDGjgB8lRcV106Dogq5VrIFVasq6w7xpadD8xmFW7Momm1UTJyKOzFfZ26R1B2h8j9PVM7tyz93NKq14/8Ap3jzHyTe5qhzZGhEhcmWNMeLtCDF7gCVl61yJlN8cfqsncOMqcVYJsOqXQOip71BNBUxTcqUhLGFCpBW9wMyzyXmrNoEdV6XgI+zHRLJFIM8nlSaFxTanZImApALgUmoGPtldAXV8EDF1u3Namzp7VSk3i5o8tSsvSOi2nZ+nNxTPIn/ANShVtFcTqx7jgggD+1JxRlw/ecJxiolyMfZQ1hjIsEngVTTZsqp6pCq1to/fMptZ0tSqgyEwDIEJ0hZSKnaIKu1H1SRpTLucgfVLb91d0BopsE+Ml0ugbhA+qY0UUtZmuV6wbmVJ1ZrRm9vNI8bryWAHIna6gD9QjdIRro0umd7TMa6t/EMwo4ZU26ccNOnBV4ZUOiYYfY925xkQ95LW7wSJcPVDJByjaET1dCTEsPLp/JIKmCOJzXo9W2QrrJclUUqzAnAY4rrMJA3lberZqoWQ4JXJh0Rj24YJC2GF5Njkhq1iERbgAZIWwpUeStVjVwBfNK6Gc5aApBRBUgEpiS4vguosxY1bbs7V+2p8wY6bJCxLVpOzVf7WmJ0MDoQhH1DRdG1uWytJQpeENIB8IEeUJDVbkj69/4QG6xr5LsxtKzZE3RXXot2pEgA6a5g8eC+NQJfUuoVbbidM/NIxhhcCWnxFvE/qs5c2zNqXXVSP7G7DR5ugn0IV+MXDQzxs2uhhZqpiVMZC3bJ0Lg1xPqUCi4GG1ouqEsO3EfF4tk+vL5qN3euFQN7um6G6lnE/oqrIFpL9kDa+JoyBH0KNp2tOo4uDnbRAgaEex+ZVI3LwlOl6FWRqPIGQ+63wt5zCb025s8XwF26AQ7f+9yqojIBjcjqQIb+qLpsggHPmrPG9H9dENlsqC9qVGo4BdmFRcAnevLZ1opqXLVU66Cg603yqn0OamxkV3N21DNueS7UYAhX1AFkY85aFJoXAutcrs5i9gXxXzHLrigYiV8CokrgcjRi9pTDCK2zWpHhVZ/qA+qbdl+yTrgCrVJZSObQP5lQcRPwt5793Fakdj7MCQx0tIM94+cjrrGXTcqwwTkrF2SGJcq6lRHU7AEaublImMuqhVw4ABpJJ3mY9l0LFIf9ImbxS4DWk70pt7VxoGqHODqjwG56DagR5ZqH/wCh2dS3p7VMvqAnZdDfgJGRJHnuUez93VqiiHMDaTGiRtEuLwMjzS/8+lF/tWodc4Y4iHPefNC0MMawznPE5lP7isEvquUygO8xkmFk0EDfG7+sdOISl1TP3Tii0OAc3Iq+FcbObL6MKTSM2xn6ei6ys8HxkRqc/ooUK+4+q7UoS1wZmSDE6TuAVneroivellTEG8ULUxRo3pHVe6SC7MZEbwhzTJ1cF4rs7hrcY63ihRjc6ApdcOjePZUC4AHxBCjWMa2IOO6FSapKV17oHeq2X0J1EVyM8HqQcFUVxi6GiASKy+NVUlclCgFxetJ2LwD+KqFzx9jTI2/vv1FMfM8uqy+0vZuzln3FtSp7MODA6p/iOzdn1MeSrihs+gbG+0BAA5ADQQiKEZTEbMHz3JeXeQ+aKoiY5CR56ey7RCVR0DZMiCBlOfnwIj0Ue9JEA5jwk78t+XJdvATDmkyMnRrEgg+wQrCGnKQCdk6RJORnhn7rL0b4Tu2gBrfvbTvQpZiOFNcDUb4XF0Ax4TlvHlqjXyTAG/UkesBTvXiWt3NaXH5fmjKKkqYIycXaMZUNQOLXMcCNcsuoO9cuHwFp67GuydGkk5ZEcJSvEMCe4Swg8WnJ3kd/suWWFp8OmOZNdE9jm6TonNu0DRwHLUqmhgr2HxHfu3Jvb2jRu81eMNVRzylbsqYZOQnmfoEwtaJGZzPyCkygB13cFNuX7yVEqJsz/auyGz3zRmPj5jj5LJvru3QvRrmmHNcw5ggjyK84uqRY5zDqCQVxf5cEntXpbE74BXNY74Q7aoO5W1WyoMohciVlmz5x3BRc08FbTgbkUHN4K0YoRsybV0OXAvoREJ7S6CorrEDD7shhnf3LGkSxh72rw2W6A9XQI6r1qo4rM9grDurbvI8VY7cndTGTOuUu/wAy0j/RdeKNREb6Re4R9EwpkR7noMgldV7eeQ10ATKmNAqGZN9QACR8WUbzP6JU+hEhxJ2YDYE5QANxjIJiXbVTLQCAg7x5gkf0mP8ALz8/nyTUZMso1QJd8uI18kB3u24u/uMDoFV3hDXCZz1mcj5lEWLd/BMKfXjgHtGp2TIBg5ouyfPTMcNDpmkNxV237ckDacZ5DZA+Xy8mGHHwxO8gQfyMJX6EZViJHuqalrBBa6Ad2rV88+yuY6WwmFK3MIzJyG/nzVjan74hcFQxlny48lzYBEty4t3eixjlU6HyK877XMLLh3B4Dx8j8l6CZjP13LNds8NNSmKo1pyHc2Hf5KWeG8BoSpmFqVoUTVMZKRt+KjVrNaFyLH/SrkfMqnTNEU6vVD2oLv6URVYG8E6x8FczONKsCqCkCphJyisMt+9rU6Z0fUawxrslwBjylBOKe9iy0XTXOG1sNe9jZjaqAQB7k+SKVsx61TYGAMaAGtAa1o0DQIACjVQ9ldd6wPgtzIjXRTcDM5LsEJATA4uAPMJsDAJ8gldo2Xg/2iRwnT6phdVPDCwGctd6HYJ2xzMfJEUDDSdOSHtDm7qU6AKWl0mRu03yCc/fjxRVzU2KRjU5Dz3od7YeMtRM+mvofZD3dXvHho+Fvud6IAarPgjLwknKMjAAjcf16Fnh+0GZz8RnmeOeaW37iKgaDlscRqZ0B4ZIrC52CHf3nQQCYEnLdM7gkfo3wbD+WekrlGpooVn+B3RDUX5Jl4AYh0H3UqbocfVDB0qxj81jBOz6HUIerrsEAgiM9NkrrKvNdqPmD6Tqf0TJinnV5g7xUexrSQHEAnhOSpZ2afMw0ea0+I3BbVe2BrM8iAqf4uBxPBcjikyyfBF/sisMmlqFucHrzoD0IWmY+eI88lMg8Er76ZJI8pDgpteoMp80QyAouYyiR7oxK4CY00RZvAREBWYZsuqU2f3VGtPQuAKG1h1PS8Pquo0mAy6GND5+IuDQCZ4yi6N2yo2WnjLD8QjXJDXZySWq2CHDIjQqscrjwo8Sas2GDNbL4G8fXJX3LpKB7OVCaIe7UuOY5HZ+hRTXSZXUnfTma6XudDVRY6nqu3VTKFyx+pTAF+LN8IM6OcPIjT2Qlg2DPujMYGQH3/oUEcmwNXHZ9dfZMKD3lY7QO5wMg6QDkYlF4XVOydoSdvdEZgacv13IO/eGuaHAkEbIA0iWiT+qtsK4h3xAhwyJz01GQy/NI/Rvg1rOlp103oS2fIVlKu10eLyKorF7ZAAI3GM0fgA0Vo3ZBX03h2bfNIn13gRtFUC/c3KSeQkoWGjSXdw1jZJz4BLnYs1vieejRrHILMY7jT2w1oAeeInZB3nmlNqXkl7iXGcyZ/YU5ZKCo2Prm4dVqOqaSdOA0A9FNhGgzOsSqbGTrl8iExYwcFJux0qKaL+OSubUKqdbgOLo8t3ougncgY8q2ypF6gF81JSMS2inHZGntXdEcHFx6NY4/OEoWg7Cf82P8J/zahQV6eg3rkmvnwmt8kGJnJA6vht8HdFvS50wfXP6oqkAM+CqsR9mz8DY9ArGaFd0Vw4WDXNST+8kVZiAga+p6o6j8HkUwovxbMg7sz6IBrpPT5lHY4Pg8/kEutdD5pgA11UIaXkT4/DqMtNR091VbuJ2hMCMs8vUnX8lfX/kBLyMz5pGMgiu5w+GchE80TZYy0ZVDlxSd7jMTlw3K1jBnkPRLYaHNxi9qPiqtbOknVK8R7QUg2KA23H+qCGjmSdeiygMucTnnEnPJNLdo4DRTeRsbVEKFuT4jmSZLjqSd6Ptqe5WUdAiKAEnoojl7KZyjzzyjorjlmqaO/qrKwyTfAEqj5HtKFp0yN/zlW2p8A/Cok6dPyQMf//Z",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900">
          Success stories from our clients
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
          Discover how we have transformed challenges into triumphs, providing
          dedication and quality to each company.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl border border-gray-200 shadow-sm px-8 pt-10 pb-8"
            >
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-gray-200 text-6xl leading-none">
                “
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.text}
              </p>

              {/* Footer */}
              <div className="mt-8 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Green bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 rounded-b-xl" />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-12 flex justify-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
