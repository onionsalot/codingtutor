# Generated by Django 3.2.3 on 2021-06-11 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0017_auto_20210611_1207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='skills',
            field=models.CharField(blank=True, choices=[('A.NET(A#/ASHARP)', 'A.NET (A#/A sharp)'), ('A-0SYSTEM', 'A-0 System'), ('A+(A(PLUS)', 'A+ (A (plus)'), ('ABAP', 'ABAP'), ('ABC', 'ABC'), ('ABCALGOL', 'ABC ALGOL'), ('ACC', 'ACC'), ('ACCENT(RATIONALSYNERGY)', 'Accent (Rational Synergy)'), ('ACEDASL(DISTRIBUTEDAPPLICATIONSPECIFICATIONLANGUAGE)', 'Ace DASL (Distributed Application Specification Language)'), ('ACTION!', 'Action!'), ('ACTIONSCRIPT', 'ActionScript'), ('ACTOR', 'Actor'), ('ADA', 'Ada'), ('ADENINE(HAYSTACK)', 'Adenine (Haystack)'), ('ADVPL', 'AdvPL'), ('AGDA', 'Agda'), ('AGILENTVEE(KEYSIGHTVEE)', 'Agilent VEE (Keysight VEE)'), ('AGORA', 'Agora'), ('AIMMS', 'AIMMS'), ('ALDOR', 'Aldor'), ('ALEF', 'Alef'), ('ALF', 'ALF'), ('ALGOL58', 'ALGOL 58'), ('ALGOL60', 'ALGOL 60'), ('ALGOL68', 'ALGOL 68'), ('ALGOLW', 'ALGOL W'), ('ALICE(ALICEML)', 'Alice (Alice ML)'), ('ALMA-0', 'Alma-0'), ('AMBIENTTALK', 'AmbientTalk'), ('AMIGAE', 'Amiga E'), ('AMOS(AMOSBASIC)', 'AMOS (AMOS BASIC)'), ('AMPL', 'AMPL'), ('ANGELSCRIPT', 'AngelScript'), ('APACHEPIGLATIN', 'Apache Pig latin'), ('APEX(SALESFORCE.COM,INC)', 'Apex (Salesforce.com, Inc)'), ('APL', 'APL'), ("APPINVENTORFORANDROID'SVISUALBLOCKLANGUAGE(MITAPPINVENTOR)", "App Inventor for Android's visual block language (MIT App Inventor)"), ('APPLESCRIPT', 'AppleScript'), ('APT', 'APT'), ('ARC', 'Arc'), ('AREXX', 'ARexx'), ('ARGUS', 'Argus'), ('ASSEMBLYLANGUAGE(ASM)', 'Assembly language (ASM)'), ('AUTOIT', 'AutoIt'), ('AUTOLISP/VISUALLISP', 'AutoLISP / Visual LISP'), ('AVEREST', 'Averest'), ('AWK', 'AWK'), ('AXUM', 'Axum'), ('B', 'B'), ('BABBAGE', 'Babbage'), ('BALLERINA', 'Ballerina'), ('BASIC', 'BASIC'), ('BATCHFILE(WINDOWS/MS-DOS)', 'Batch file (Windows/MS-DOS)'), ('BC(BASICCALCULATOR)', 'bc (basic calculator)'), ('BCPL', 'BCPL'), ('BERTRAND', 'Bertrand'), ('BETA', 'BETA'), ('BLISS', 'BLISS'), ('BLOCKLY', 'Blockly'), ('BLOOP', 'BlooP'), ('BOO', 'Boo'), ('BOOMERANG', 'Boomerang'), ('BOSQUE', 'Bosque'), ('C', 'C'), ('C--', 'C--'), ('C++', 'C++'), ('C*', 'C*'), ('C#', 'C#'), ('C/AL', 'C/AL'), ('CACHÉOBJECTSCRIPT', 'Caché ObjectScript'), ('CAML', 'Caml'), ('CAYENNE(LENNARTAUGUSTSSON)', 'Cayenne (Lennart Augustsson)'), ('CDUCE', 'CDuce'), ('CECIL', 'Cecil'), ('CESIL(COMPUTEREDUCATIONINSCHOOLSINSTRUCTIONLANGUAGE)', 'Cesil (Computer Education in Schools Instruction Language)'), ('CÉU', 'Céu'), ('CEYLON', 'Ceylon'), ('CFENGINE', 'CFEngine'), ('CG(HIGH-LEVELSHADER/SHADINGLANGUAGE[HLSL])', 'Cg (High-Level Shader/Shading Language [HLSL])'), ('CH', 'Ch'), ('CHAPEL(CASCADEHIGHPRODUCTIVITYLANGUAGE)', 'Chapel (Cascade High Productivity Language)'), ('CHARM', 'Charm'), ('CHILL', 'CHILL'), ('CHIP-8', 'CHIP-8'), ('CHUCK', 'ChucK'), ('CILK(ALSOCILK++ANDCILKPLUS)', 'Cilk (also Cilk++ and Cilk plus)'), ('CONTROLLANGUAGE', 'Control Language'), ('CLAIRE', 'Claire'), ('CLARION', 'Clarion'), ('CLEAN', 'Clean'), ('CLIPPER', 'Clipper'), ('CLIPS', 'CLIPS'), ('CLIST', 'CLIST'), ('CLOJURE', 'Clojure'), ('CLU', 'CLU'), ('CMS-2', 'CMS-2'), ('COBOL', 'COBOL'), ('COBOLSCRIPT', 'CobolScript'), ('COBRA', 'Cobra'), ('COFFEESCRIPT', 'CoffeeScript'), ('COLDFUSION', 'ColdFusion'), ('COMAL', 'COMAL'), ('COMBINEDPROGRAMMINGLANGUAGE', 'Combined Programming Language'), ('COMIT', 'COMIT'), ('COMMONINTERMEDIATELANGUAGE', 'Common Intermediate Language'), ('COMMONLISP', 'Common Lisp'), ('COMPASS', 'COMPASS'), ('COMPONENTPASCAL', 'Component Pascal'), ('CONSTRAINTHANDLINGRULES', 'Constraint Handling Rules'), ('COMTRAN', 'COMTRAN'), ('COOL', 'Cool'), ('COQ', 'Coq'), ('CORAL66', 'Coral 66'), ('CORVISION', 'CorVision'), ('COWSEL', 'COWSEL'), ('CPL', 'CPL'), ('CRYPTOL', 'Cryptol'), ('CRYSTAL', 'Crystal'), ('CSOUND', 'Csound'), ('CUNEIFORM', 'Cuneiform'), ('CURL', 'Curl'), ('CURRY', 'Curry'), ('CYBIL', 'Cybil'), ('CYCLONE', 'Cyclone'), ('CYPHERQUERYLANGUAGE', 'Cypher Query Language'), ('CYTHON', 'Cython'), ('CEEMAC', 'CEEMAC'), ('D', 'D'), ('DART', 'Dart'), ('DARWIN', 'Darwin'), ('DATAFLEX', 'DataFlex'), ('DATALOG', 'Datalog'), ('DATATRIEVE', 'DATATRIEVE'), ('DBASE', 'dBase'), ('DC', 'dc'), ('DCL(DIGITALCOMMANDLANGUAGE)', 'DCL (DIGITAL Command Language)'), ('DELPHI', 'Delphi'), ('DINKC', 'DinkC'), ('DIBOL', 'DIBOL'), ('DOG', 'Dog'), ('DRACO', 'Draco'), ('DRAKON', 'DRAKON'), ('DYLAN', 'Dylan'), ('DYNAMO', 'DYNAMO'), ('DAX(DATAANALYSISEXPRESSIONS)', 'DAX (Data Analysis Expressions)'), ('E', 'E'), ('EASE', 'Ease'), ('EASYPL/I', 'Easy PL/I'), ('EASYTRIEVEPLUS', 'EASYTRIEVE PLUS'), ('EC', 'eC'), ('ECMASCRIPT', 'ECMAScript'), ('EDINBURGHIMP', 'Edinburgh IMP'), ('EGL', 'EGL'), ('EIFFEL', 'Eiffel'), ('ELAN', 'ELAN'), ('ELIXIR', 'Elixir'), ('ELM', 'Elm'), ('EMACSLISP', 'Emacs Lisp'), ('EMERALD', 'Emerald'), ('EPIGRAM', 'Epigram'), ('EPL(EASYPROGRAMMINGLANGUAGE)', 'EPL (Easy Programming Language)'), ('EPL(ELTRONPROGRAMMINGLANGUAGE)', 'EPL (Eltron Programming Language)'), ('ERLANG', 'Erlang'), ('ES', 'es'), ('ESCHER', 'Escher'), ('ESPOL', 'ESPOL'), ('ESTEREL', 'Esterel'), ('ETOYS', 'Etoys'), ('EUCLID', 'Euclid'), ('EULER', 'Euler'), ('EUPHORIA', 'Euphoria'), ('EUSLISPROBOTPROGRAMMINGLANGUAGE', 'EusLisp Robot Programming Language'), ('CMSEXEC', 'CMS EXEC'), ('EXEC2', 'EXEC 2'), ('EXECUTABLEUML', 'Executable UML'), ('EZHIL', 'Ezhil'), ('F', 'F'), ('F#(FSHARP)', 'F# (F sharp)'), ('F*', 'F*'), ('FACTOR', 'Factor'), ('FANTOM', 'Fantom'), ('FAUST', 'FAUST'), ('FFP', 'FFP'), ('FJÖLNIR', 'Fjölnir'), ('FL', 'FL'), ('FLAVORS', 'Flavors'), ('FLEX', 'Flex'), ('FLIX', 'Flix'), ('FLOOP', 'FlooP'), ('FLOW-MASTIC(B0)', 'FLOW-MASTIC (B0)'), ('FOCAL(FORMULATINGON-LINECALCULATIONSINALGEBRAICLANGUAGE/FORMULACALCULATOR)', 'FOCAL (Formulating On-Line Calculations in Algebraic Language/FOrmula CALculator)'), ('FOCUS', 'FOCUS'), ('FOIL', 'FOIL'), ('FORMAC(FORMULAMANIPULATIONCOMPILER)', 'FORMAC (FORMula MAnipulation Compiler)'), ('@FORMULA', '@Formula'), ('FORTH', 'Forth'), ('FORTRAN', 'Fortran'), ('FORTRESS', 'Fortress'), ('FP', 'FP'), ('FRANZLISP', 'Franz Lisp'), ('FUTHARK', 'Futhark'), ('F-SCRIPT', 'F-Script'), ('GAMEMAKERLANGUAGE', 'Game Maker Language'), ('GAMEMONKEYSCRIPT', 'GameMonkey Script'), ('GAMS(GENERALALGEBRAICMODELINGSYSTEM)', 'GAMS (General Algebraic Modeling System)'), ('GAP', 'GAP'), ('G-CODE', 'G-code'), ('GDSCRIPT(GODOT)', 'GDScript (Godot)'), ('GENIE', 'Genie'), ('GDL(GEOMETRICDESCRIPTIONLANGUAGE)', 'GDL (Geometric Description Language)'), ('GEORGE', 'GEORGE'), ('GLSL(OPENGLSHADINGLANGUAGE)', 'GLSL (OpenGL Shading Language)'), ('GNUE', 'GNU E'), ('GNUGUILE(GNUUBIQUITOUSINTELLIGENTLANGUAGEFOREXTENSIONS)', 'GNU Guile (GNU Ubiquitous Intelligent Language for Extensions)'), ('GO', 'Go'), ('GO!', 'Go!'), ('GOAL(GAMEORIENTEDASSEMBLYLISP)', 'GOAL (Game Oriented Assembly Lisp)'), ('GÖDEL', 'Gödel'), ('GOLO', 'Golo'), ('GOM(GOODOLDMAD)', 'GOM (Good Old Mad)'), ('GOOGLEAPPSSCRIPT', 'Google Apps Script'), ('GOSU', 'Gosu'), ('GOTRAN(IBM1620)', 'GOTRAN (IBM 1620)'), ('GPSS(GENERALPURPOSESIMULATIONSYSTEM)', 'GPSS (General Purpose Simulation System)'), ('GRAPHTALK(COMPUTERSCIENCESCORPORATION)', 'GraphTalk (Computer Sciences Corporation)'), ('GRASS', 'GRASS'), ('GRASSHOPPER', 'Grasshopper'), ('GROOVY(PROGRAMMINGLANGUAGE)|GROOVY(APACHEGROOVY)', 'Groovy (programming language)|Groovy (Apache Groovy)'), ('HACK', 'Hack'), ('HAGGIS', 'HAGGIS'), ('HAL/S', 'HAL/S'), ('HALIDE(PROGRAMMINGLANGUAGE)', 'Halide (programming language)'), ('HARBOUR', 'Harbour'), ('HARTMANNPIPELINES', 'Hartmann pipelines'), ('HASKELL', 'Haskell'), ('HAXE', 'Haxe'), ('HERMES', 'Hermes'), ('HIGHLEVELASSEMBLY(HLA)', 'High Level Assembly (HLA)'), ('HLSL', 'HLSL'), ('HOLLYWOOD', 'Hollywood'), ('HOLYC(TEMPLEOS)', 'HolyC (TempleOS)'), ('HOP', 'Hop'), ('HOPSCOTCH', 'Hopscotch'), ('HOPE', 'Hope'), ('HUME', 'Hume'), ('HYPERTALK', 'HyperTalk'), ('IO', 'Io'), ('ICON', 'Icon'), ('IBMBASICASSEMBLYLANGUAGE', 'IBM Basic assembly language'), ('IBMHASCRIPT', 'IBM HAScript'), ('IBMINFORMIX-4GL', 'IBM Informix-4GL'), ('IBMRPG', 'IBM RPG'), ('IDL', 'IDL'), ('IDRIS', 'Idris'), ('INFORM', 'Inform'), ('ISLISP', 'ISLISP'), ('J', 'J'), ('J#(JSHARP)', 'J# (J sharp)'), ('J++(JPLUSPLUS)', 'J++ (J plus plus)'), ('JADE', 'JADE'), ('JAI', 'Jai'), ('JAL', 'JAL'), ('JANUS(CONCURRENTCONSTRAINTPROGRAMMINGLANGUAGE)', 'Janus (concurrent constraint programming language)'), ('JANUS(TIME-REVERSIBLECOMPUTINGPROGRAMMINGLANGUAGE)', 'Janus (time-reversible computing programming language)'), ('JASS', 'JASS'), ('JAVA', 'Java'), ('JAVAFXSCRIPT', 'JavaFX Script'), ('JAVASCRIPT', 'JavaScript'), ('JESS(PROGRAMMINGLANGUAGE)', 'Jess (programming language)'), ('JCL', 'JCL'), ('JEAN', 'JEAN'), ('JOINJAVA', 'Join Java'), ('JOSS', 'JOSS'), ('JOULE', 'Joule'), ('JOVIAL', 'JOVIAL'), ('JOY', 'Joy'), ('JSCRIPT', 'JScript'), ('JSCRIPT.NET', 'JScript .NET'), ('JULIA', 'Julia'), ('JYTHON', 'Jython'), ('K', 'K'), ('KALEIDOSCOPE', 'Kaleidoscope'), ('KAREL', 'Karel'), ('KEE', 'KEE'), ('KIXTART', 'Kixtart'), ('KLERER-MAYSYSTEM', 'Klerer-May System'), ('KIF(KNOWLEDGEINTERCHANGEFORMAT)', 'KIF (Knowledge Interchange Format)'), ('KOJO', 'Kojo'), ('KOTLIN', 'Kotlin'), ('KRC', 'KRC'), ('KRL', 'KRL'), ('KUKAROBOTLANGUAGE', 'KUKA Robot Language'), ('KRYPTON', 'KRYPTON'), ('KODU', 'Kodu'), ('KV(KIVY)', 'Kv (Kivy)'), ('LABVIEW', 'LabVIEW'), ('LADDER', 'Ladder'), ('LANSA', 'LANSA'), ('LASSO', 'Lasso'), ('LAVA', 'Lava'), ('LC-3', 'LC-3'), ('LEAN', 'Lean'), ('LEGOSCRIPT', 'Legoscript'), ('LIL', 'LIL'), ('LILYPOND', 'LilyPond'), ('LIMBO', 'Limbo'), ('LIMNOR', 'Limnor'), ('LINC', 'LINC'), ('LINGO', 'Lingo'), ('LINQ', 'LINQ'), ('LIS', 'LIS'), ('LISA', 'LISA'), ('LANGUAGEH', 'Language H'), ('LISP', 'Lisp'), ('LITE-C', 'Lite-C'), ('LITHE', 'Lithe'), ('LITTLEB', 'Little b'), ('LLL', 'LLL'), ('LOGO', 'Logo'), ('LOGTALK', 'Logtalk'), ('LOTUSSCRIPT', 'LotusScript'), ('LPC', 'LPC'), ('LSE', 'LSE'), ('LSL', 'LSL'), ('LIVECODE', 'LiveCode'), ('LIVESCRIPT', 'LiveScript'), ('LUA', 'Lua'), ('LUCID', 'Lucid'), ('LUSTRE', 'Lustre'), ('LYAPAS', 'LYaPAS'), ('LYNX', 'Lynx'), ('M2001', 'M2001'), ('M4', 'M4'), ('M#', 'M#'), ('MACHINECODE', 'Machine code'), ('MAD', 'MAD'), ('MAD/I', 'MAD/I'), ('MAGIK', 'Magik'), ('MAGMA', 'Magma'), ('MÁNI', 'Máni'), ('MAPLE', 'Maple'), ('MAPPER', 'MAPPER'), ('MARK-IV', 'MARK-IV'), ('MARY', 'Mary'), ('MATLAB', 'MATLAB'), ('MASMMICROSOFTASSEMBLYX86', 'MASM Microsoft Assembly x86'), ('MATH-MATIC', 'MATH-MATIC'), ('MAUDESYSTEM', 'Maude system'), ('MAXIMA', 'Maxima'), ('MAX', 'Max'), ('MAXSCRIPT', 'MaxScript'), ('MAYA(MEL)', 'Maya (MEL)'), ('MDL', 'MDL'), ('MERCURY', 'Mercury'), ('MESA', 'Mesa'), ('MHEG-5(INTERACTIVETVPROGRAMMINGLANGUAGE)', 'MHEG-5 (Interactive TV programming language)'), ('MICROCODE', 'Microcode'), ('MICROSCRIPT', 'MicroScript'), ('MICROSOFTPOWERFX', 'Microsoft Power Fx'), ('MIIS', 'MIIS'), ('MILK(PROGRAMMINGLANGUAGE)', 'Milk (programming language)'), ('MIMIC', 'MIMIC'), ('MIRAH', 'Mirah'), ('MIRANDA', 'Miranda'), ('MIVASCRIPT', 'MIVA Script'), ('ML', 'ML'), ('MODEL204', 'Model 204'), ('MODELICA', 'Modelica'), ('MODULA', 'Modula'), ('MODULA-2', 'Modula-2'), ('MODULA-3', 'Modula-3'), ('MOHOL', 'Mohol'), ('MOO', 'MOO'), ('MORTRAN', 'Mortran'), ('MOUSE', 'Mouse'), ('MPD', 'MPD'), ('MSL', 'MSL'), ('MUMPS', 'MUMPS'), ('MUPAD', 'MuPAD'), ('MUTAN', 'Mutan'), ('MYSTICPROGRAMMINGLANGUAGE', 'Mystic Programming Language'), ('NASM', 'NASM'), ('NAPIER88', 'Napier88'), ('NEKO', 'Neko'), ('NEMERLE', 'Nemerle'), ('NESL', 'NESL'), ('NET.DATA', 'Net.Data'), ('NETLOGO', 'NetLogo'), ('NETREXX', 'NetRexx'), ('NEWLISP', 'NewLISP'), ('NEWP', 'NEWP'), ('NEWSPEAK', 'Newspeak'), ('NEWTONSCRIPT', 'NewtonScript'), ('NIAL', 'Nial'), ('NICKLE', 'Nickle'), ('NIM', 'Nim'), ('NIX(SYSTEMSCONFIGURATIONLANGUAGE)', 'Nix (Systems configuration language)'), ('NPL', 'NPL'), ('NOTEXACTLYC', 'Not eXactly C'), ('NOTQUITEC', 'Not Quite C'), ('NSIS', 'NSIS'), ('NU', 'Nu'), ('NWSCRIPT', 'NWScript'), ('NXT-G', 'NXT-G'), ('O:XML', 'o:XML'), ('OAK', 'Oak'), ('OBERON', 'Oberon'), ('OBJ2', 'OBJ2'), ('OBJECTLISP', 'Object Lisp'), ('OBJECTLOGO', 'ObjectLOGO'), ('OBJECTREXX', 'Object REXX'), ('OBJECTPASCAL', 'Object Pascal'), ('OBJECTIVE-C', 'Objective-C'), ('OBJECTIVE-J', 'Objective-J'), ('OBLIQ', 'Obliq'), ('OCAML', 'OCaml'), ('OCCAM', 'occam'), ('OCCAM-Π', 'occam-π'), ('OCTAVE', 'Octave'), ('OMNIMARK', 'OmniMark'), ('OPA', 'Opa'), ('OPAL', 'Opal'), ('OPENCL', 'OpenCL'), ('OPENEDGEABL', 'OpenEdge ABL'), ('OPL', 'OPL'), ('OPENVERA', 'OpenVera'), ('OPS5', 'OPS5'), ('OPTIMJ', 'OptimJ'), ('ORC', 'Orc'), ('ORCA/MODULA-2', 'ORCA/Modula-2'), ('ORIEL', 'Oriel'), ('ORWELL', 'Orwell'), ('OXYGENE', 'Oxygene'), ('OZ', 'Oz'), ('P', 'P'), ('P4', 'P4'), ('P′′', 'P′′'), ('PARASAIL(PROGRAMMINGLANGUAGE)', 'ParaSail (programming language)'), ('PARI/GP', 'PARI/GP'), ('PASCAL', 'Pascal'), ('PASCALSCRIPT', 'Pascal Script'), ('PCASTL', 'PCASTL'), ('PCF', 'PCF'), ('PEARL', 'PEARL'), ('PEOPLECODE', 'PeopleCode'), ('PERL', 'Perl'), ('PDL', 'PDL'), ('PHARO', 'Pharo'), ('PHP', 'PHP'), ('PICO', 'Pico'), ('PICOLISP', 'Picolisp'), ('PICT', 'Pict'), ('PIKE', 'Pike'), ('PILOT', 'PILOT'), ('PIPELINES', 'Pipelines'), ('PIZZA', 'Pizza'), ('PL-11', 'PL-11'), ('PL/0', 'PL/0'), ('PL/B', 'PL/B'), ('PL/C', 'PL/C'), ('PL/I', 'PL/I'), ('PL/M', 'PL/M'), ('PL/P', 'PL/P'), ('PL/SQL', 'PL/SQL'), ('PL360', 'PL360'), ('PLANC', 'PLANC'), ('PLANKALKÜL', 'Plankalkül'), ('PLANNER', 'Planner'), ('PLEX', 'PLEX'), ('PLEXIL', 'PLEXIL'), ('PLUS', 'Plus'), ('POP-11', 'POP-11'), ('POP-2', 'POP-2'), ('POSTSCRIPT', 'PostScript'), ('PORTABLE', 'PortablE'), ('POV-RAYSDL', 'POV-Ray SDL'), ('POWERHOUSE', 'Powerhouse'), ('POWERBUILDER', 'PowerBuilder'), ('PPL', 'PPL'), ('PROCESSING', 'Processing'), ('PROCESSING.JS', 'Processing.js'), ('PROGRAPH', 'Prograph'), ('PROIV', 'PROIV'), ('PROJECTVERONA', 'Project Verona'), ('PROLOG', 'Prolog'), ('PROMAL', 'PROMAL'), ('PROMELA', 'Promela'), ('PROSEMODELINGLANGUAGE', 'PROSE modeling language'), ('PROTEL', 'PROTEL'), ('PROVIDEX', 'ProvideX'), ('PRO*C', 'Pro*C'), ('PURE', 'Pure'), ('PUREDATA', 'Pure Data'), ('PURESCRIPT', 'PureScript'), ('PYTHON', 'Python'), ('Q(PROGRAMMINGLANGUAGEFROMKXSYSTEMS)', 'Q (programming language from Kx Systems)'), ('Q#(MICROSOFTPROGRAMMINGLANGUAGE)', 'Q# (Microsoft programming language)'), ('QALB', 'Qalb'), ('QUANTUMCOMPUTATIONLANGUAGE', 'Quantum Computation Language'), ('QTSCRIPT', 'QtScript'), ('QUAKEC', 'QuakeC'), ('QPL', 'QPL'), ('.QL', '.QL'), ('R', 'R'), ('R++', 'R++'), ('RACKET', 'Racket'), ('RAKU', 'Raku'), ('RAPID', 'RAPID'), ('RAPIRA', 'Rapira'), ('RATFIV', 'Ratfiv'), ('RATFOR', 'Ratfor'), ('REASON', 'Reason'), ('REBOL', 'REBOL'), ('RED', 'Red'), ('REDCODE', 'Redcode'), ('REFAL', 'REFAL'), ('REXX', 'REXX'), ('RLAB', 'Rlab'), ('ROOP', 'ROOP'), ('RPG', 'RPG'), ('RPL', 'RPL'), ('RSL', 'RSL'), ('RTL/2', 'RTL/2'), ('RUBY', 'Ruby'), ('RUST', 'Rust'), ('S', 'S'), ('S2', 'S2'), ('S3', 'S3'), ('S-LANG', 'S-Lang'), ('S-PLUS', 'S-PLUS'), ('SA-C', 'SA-C'), ('SABRETALK', 'SabreTalk'), ('SAIL', 'SAIL'), ('SAS', 'SAS'), ('SASL', 'SASL'), ('SATHER', 'Sather'), ('SAWZALL', 'Sawzall'), ('SCALA', 'Scala'), ('SCHEME', 'Scheme'), ('SCILAB', 'Scilab'), ('SCRATCH', 'Scratch'), ('SCRIPT.NET', 'Script.NET'), ('SED', 'Sed'), ('SEED7', 'Seed7'), ('SELF', 'Self'), ('SENSETALK', 'SenseTalk'), ('SEQUENCEL', 'SequenceL'), ('SERPENT', 'Serpent'), ('SETL', 'SETL'), ('SIMPOL', 'SIMPOL'), ('SIGNAL', 'SIGNAL'), ('SIMPLE', 'SiMPLE'), ('SIMSCRIPT', 'SIMSCRIPT'), ('SIMULA', 'Simula'), ('SIMULINK', 'Simulink'), ('SINGULARITY', 'Singularity'), ('SISAL', 'SISAL'), ('SLIP', 'SLIP'), ('SMALL', 'SMALL'), ('SMALLTALK', 'Smalltalk'), ('SML', 'SML'), ('STRONGTALK', 'Strongtalk'), ('SNAP!', 'Snap!'), ('SNOBOL', 'SNOBOL'), ('SNOWBALL', 'Snowball'), ('SOL', 'SOL'), ('SOLIDITY', 'Solidity'), ('SOPHAEROS', 'SOPHAEROS'), ('SOURCE', 'Source'), ('SPARK', 'SPARK'), ('SPEAKEASY', 'Speakeasy'), ('SPEEDCODE', 'Speedcode'), ('SPIN', 'SPIN'), ('SP/K', 'SP/k'), ('SPS', 'SPS'), ('SQL', 'SQL'), ('SQR', 'SQR'), ('SQUEAK', 'Squeak'), ('SQUIRREL', 'Squirrel'), ('SR', 'SR'), ('S/SL', 'S/SL'), ('STARLOGO', 'Starlogo'), ('STRAND', 'Strand'), ('STATA', 'Stata'), ('STATEFLOW', 'Stateflow'), ('SUBTEXT', 'Subtext'), ('SBL', 'SBL'), ('SUPERCOLLIDER', 'SuperCollider'), ('SUPERTALK', 'SuperTalk'), ('SWIFT(APPLEPROGRAMMINGLANGUAGE)', 'Swift (Apple programming language)'), ('SWIFT(PARALLELSCRIPTINGLANGUAGE)', 'Swift (parallel scripting language)'), ('SYMPL', 'SYMPL'), ('SYSTEMVERILOG', 'SystemVerilog'), ('T', 'T'), ('TACL', 'TACL'), ('TACPOL', 'TACPOL'), ('TADS(TEXTADVENTUREDEVELOPMENTSYSTEM)', 'TADS (Text Adventure Development System)'), ('TAL', 'TAL'), ('TCL', 'Tcl'), ('TEA', 'Tea'), ('TECO(TEXTEDITORANDCORRECTOR)', 'TECO (text Editor and Corrector)'), ('TELCOMP', 'TELCOMP'), ('TEX', 'TeX'), ('TEX(TEXTEXECUTIVEPROGRAMMINGLANGUAGE)', 'TEX (Text Executive Programming Language)'), ('TIE', 'TIE'), ('TMG(TRANSMOGRIFFER)', 'TMG (TransMo Griffer)'), ('TOM', 'Tom'), ('TOI', 'Toi'), ('TOPSPEED(CLARION)', 'Topspeed (Clarion)'), ('TPU(TEXTPROCESSINGUTILITY)', 'TPU (text Processing Utility)'), ('TRAC', 'Trac'), ('TTM', 'TTM'), ('T-SQL(TRANSACT-SQL)', 'T-SQL (Transact-SQL)'), ('TRANSCRIPT(LIVECODE)', 'Transcript (LiveCode)'), ('TTCN(TREEANDTABULARCOMBINEDNOTATION)', 'TTCN (Tree and Tabular Combined Notation)'), ('TURING', 'Turing'), ('TUTOR(PLATOAUTHORLANGUAGE)', 'TUTOR (PLATO Author Language)'), ('TXL', 'TXL'), ('TYPESCRIPT', 'TypeScript'), ('TYNKER', 'Tynker'), ('UBERCODE', 'Ubercode'), ('UCSDPASCAL', 'UCSD Pascal'), ('UMPLE', 'Umple'), ('UNICON', 'Unicon'), ('UNIFACE', 'Uniface'), ('UNITY', 'UNITY'), ('UNREALSCRIPT', 'UnrealScript'), ('VALA', 'Vala'), ('VERILOG', 'Verilog'), ('VHDL', 'VHDL'), ('VIMSCRIPT', 'Vim script'), ('VIPER(ETHEREUM/ETHER(ETH))', 'Viper (Ethereum/Ether (ETH))'), ('VISUALDATAFLEX', 'Visual DataFlex'), ('VISUALDIALOGSCRIPT', 'Visual DialogScript'), ('VISUALFOXPRO', 'Visual FoxPro'), ('VISUALJ++(VISUALJPLUSPLUS)', 'Visual J++ (Visual J plus plus)'), ('VISUALLISP', 'Visual LISP'), ('VISUALOBJECTS', 'Visual Objects'), ('VISUALPROLOG', 'Visual Prolog'), ('WATFIV,WATFOR(WATERLOOFORTRANIV)', 'WATFIV, WATFOR (WATerloo FORtran IV)'), ('WEBASSEMBLY', 'WebAssembly'), ('WEBDNA', 'WebDNA'), ('WHILEY', 'Whiley'), ('WINBATCH', 'Winbatch'), ('WOLFRAMLANGUAGE', 'Wolfram Language'), ('WYVERN', 'Wyvern'), ('X++(XPLUSPLUS/MICROSOFTDYNAMICSAX)', 'X++ (X plus plus/Microsoft Dynamics AX)'), ('X10', 'X10'), ('XBASE', 'xBase'), ('XBASE++(XBASEPLUSPLUS)', 'xBase++ (xBase plus plus)'), ('XBL', 'XBL'), ('XC', 'XC'), ('XHARBOUR', 'xHarbour'), ('XL', 'XL'), ('XOJO', 'Xojo'), ('XOTCL', 'XOTcl'), ('XOD', 'Xod'), ('XPL', 'XPL'), ('XPL0', 'XPL0'), ('XQUERY', 'XQuery'), ('XSB', 'XSB'), ('XSHARP(X#)', 'XSharp (X#)'), ('XSLT', 'XSLT'), ('XTEND', 'Xtend'), ('YORICK', 'Yorick'), ('YQL', 'YQL'), ('YOIX', 'Yoix'), ('YUI', 'YUI'), ('ZNOTATION', 'Z notation'), ('ZEBRA,ZPL,ZPL2', 'Zebra, ZPL, ZPL2'), ('ZENO', 'Zeno'), ('ZETALISP', 'ZetaLisp'), ('ZIG', 'Zig'), ('ZOPL', 'ZOPL'), ('ZPL', 'ZPL'), ('Z++', 'Z++')], default='A.NET(A#/ASHARP)', max_length=100),
        ),
    ]
