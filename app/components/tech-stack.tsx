import { Languages } from "@/constants/languages";
import { Frameworks } from "@/constants/frameworks";
import { Databases } from "@/constants/databases";
import { Others } from "@/constants/others";

const TechStack = () => {
    return (
        <>
            <div className="boder-[#a0a4ad] shadow-md solid rounded p-5 w-full flex flex-col">
                <div className="mb-5">
                    <h2 className="text-xl font-bold mb-3">Languages</h2>
                    <div className="flex flex-wrap gap-2">
                        {Object.values(Languages).map((lang, index) => (
                            <div key={index} className="flex items-center gap-1 p-2 rounded-md border border-gray-200 hover:bg-gray-100">
                                <lang.icon className="text-xl" />
                                <span className="text-sm">{lang.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="boder-[#a0a4ad] shadow-md solid rounded p-5 w-full flex flex-col">
                <div className="mb-5">
                    <h2 className="text-xl font-bold mb-3">Frameworks</h2>
                    <div className="flex flex-wrap gap-2">
                        {Object.values(Frameworks).map((framework, index) => (
                            <div key={index} className="flex items-center gap-1 p-2 rounded-md border border-gray-200 hover:bg-gray-100">
                                <framework.icon className="text-xl" />
                                <span className="text-sm">{framework.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="boder-[#a0a4ad] shadow-md solid rounded p-5 w-full flex flex-col">
                <div className="mb-5">
                    <h2 className="text-xl font-bold mb-3">Databases</h2>
                    <div className="flex flex-wrap gap-2">
                        {Object.values(Databases).map((database, index) => (
                            <div key={index} className="flex items-center gap-1 p-2 rounded-md border border-gray-200 hover:bg-gray-100">
                                <database.icon className="text-xl" />
                                <span className="text-sm">{database.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="boder-[#a0a4ad] shadow-md solid rounded p-5 w-full flex flex-col">
                <div className="mb-5">
                    <h2 className="text-xl font-bold mb-3">Others</h2>
                    <div className="flex flex-wrap gap-2">
                        {Object.values(Others).map((other, index) => (
                            <div key={index} className="flex items-center gap-1 p-2 rounded-md border border-gray-200 hover:bg-gray-100">
                                <other.icon className="text-xl" />
                                <span className="text-sm">{other.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TechStack;