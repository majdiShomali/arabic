import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
function SponserSection() {
  return (
    <div>
      <section>
        <div className="text-center ">
          {/* <h3 className="text-3xl sm:text-4xl uppercase leading-normal font-extrabold tracking-tight text-gray-900">
      Who we are
    </h3> */}
        </div>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://content.almalnews.com/wp-content/uploads/2020/12/%D8%A7%D9%84%D8%B3%D9%84%D8%B9-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9-1024x768.jpg"
                  class="absolute inset-0 h-full w-full object-cover rounded"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  رؤى حول المكونات: الكشف عن مكوناتنا{" "}
                </h2>

                <p class="my-4 text-gray-600">
                مرحبًا بكم في Ingredient Insights ، بوابتك لاكتشاف الأسرار الكامنة وراء منتجاتنا الاستثنائية. نحن نؤمن بالشفافية ونريد تمكين عملائنا الكرام بمعرفة ما يدخل في كل عنصر نقدمه. يعمل موقعنا كمورد شامل حيث يمكنك استكشاف المكونات الدقيقة التي تشكل تركيباتنا المعدة بعناية. من أفضل المستخلصات العضوية إلى أحدث المركبات العلمية ، نقدم معلومات مفصلة حول كل مكون مستخدم في منتجاتنا. انغمس في عالمنا من المكونات ، واكتسب فهمًا أعمق لفوائدها ، واتخذ خيارات مستنيرة لرفاهيتك. مع Ingredient Insights ، نقدم لك مستوى جديدًا من الثقة والأصالة وراحة البال في سعيك لتحقيق الجودة والحياة الصحية
                </p>
{localStorage.auth != null ? 

<Link to="/AddYourIng">
<Button
  className="border mb-10 border-solid border-amber-600 border-2 text-amber-600 hover:bg-amber-600 hover:text-[#ffffff]"
  variant="text"
>
  اضف مكونك 
</Button>
</Link>

:

<Link to="/LogIn">
<Button
  className="border mb-10 border-solid border-amber-600 border-2 text-amber-600 hover:bg-amber-600 hover:text-[#ffffff]"
  variant="text"
>
  سجل الدخول لاضافة مكون
</Button>
</Link>


}




              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SponserSection;
